
import { _decorator, Component, Node, find, Graphics, Vec2,Intersection2D, Vec3, Color, Size, size,view,screen,director, UITransform} from 'cc';
import { PointInRect } from './PointInRect';
const { ccclass, property } = _decorator;

@ccclass('Hrdaya')
export class Hrdaya extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    public slicearr:number[][]=[];        
    @property 
    public slicefan:number=8;

    public arr:number[][]=[];
    @property
    public fansec:number=200;
    @property
    public drawbox:boolean=false;
    public boxcap:boolean=false;
    @property
    public centerfan:boolean=false;

    idx:number=0;
    idx_fan:number=0;
    xscale:number=3;
    yscale:number=17*1.1;
    intervalid:number=0;
    drawtimes:number=0;    
    iscb:boolean=false;    
    g:Graphics=null!;
    
    public pts:Vec2[]=[];
    public minx:number=1;
    public miny:number=1;
    public maxx:number=1;
    public maxy:number=1;
    
    @property
    public mode:number=0;//0:hrdaya,1:rect,2:roundrect,3:....
    public csize:Size=new Size(100,100);
    @property
    public hitmode:number=1;//

    @property
    public width:number=2;
    @property
    public height:number=2;
    @property
    public isAnimDraw:boolean=true;
    @property
    public maxtimes:number=130000;
    @property
    public intval:number=30;
    @property
    public speeds:number[]=[0.6,6];

    onLoad()
    {
        let self=this;
        let g=self.node!.getComponent(Graphics);
        self.g=g!;                 
    }
    start () {    
        const self=this;
        if(self.mode==0)
        {
            self.Draw();
            self.reDraw((times:number,act:string)=>{
            });             
        }
        else if(self.mode==1)
        {
            self.RoundRect(()=>{});
        }
    }
    Circle(cb:Function)
    {
        let self=this;
        let g=self.g;        
        if(g)
        {
            g!.clear();
            g!.circle(0,0,60);
            g!.stroke();
            g!.fill();
            if(cb)
                cb("end");
        }
    }
    Ellipse(cb:Function)
    {
        let self=this;
        let g=self.g;
        if(g)
        {
            g!.clear();
            g!.ellipse(0,0,100,70);
            g!.stroke();
            g!.fill();
            if(cb)
                cb("end");
        }
    }
    Rect(cb:Function)
    {
        let self=this;
        let g=self.g;
        if(g)
        {
            g!.clear();
            g!.rect(-self.csize.width/2,-self.csize.height/2,self.csize.width,self.csize.height);
            g!.stroke();
            g!.fill();
            if(cb)
                cb("end");
        }
    }
    RoundRect(cb:Function)
    {
        let self=this;
        let g=self.g;
        if(g)
        {
            g!.clear();
            g!.roundRect(-self.csize.width/2,-self.csize.height/2,self.csize.width,self.csize.height,self.csize.width*0.1);
            g!.stroke();
            g!.fill();
            if(cb)
                cb("end");
        }
    }
    Draw()
    {
        let self=this;
        let g=self.g;        
        if(g)
        {            
            self.reCurve();
            self.idx=0;
            g!.clear();
            g!.moveTo(self.arr[0][0],self.arr[0][1]);
            for(let i=0;i<self.arr.length+1;i++)
            {                
                self.idx=self.Line(g!,self.arr,self.idx);
            }
        }
    }
    calcExt(arr:number[][])
    {
        let self=this;
        self.pts=[];
        let ext:number[]=[];
        ext.push(arr[0][0]);
        ext.push(arr[0][0]);
        ext.push(arr[0][1]);
        ext.push(arr[0][1]);
        for(let i=0;i<arr.length+1;i++)
        {                
            if(i>=arr.length) continue;
            if(ext[0]>arr[i][0])
            {
                ext[0]=arr[i][0];
            }
            if(ext[1]<arr[i][0])
            {
                ext[1]=arr[i][0];
            }
            if(ext[2]>arr[i][1])
            {
                ext[2]=arr[i][1];
            }
            if(ext[3]<arr[i][1])
            {
                ext[3]=arr[i][1];
            }                
        }
        return ext;
    }
    reCurve()
    {
        let self=this;
        if(self.mode==0)
        {
            self.arr=self.Hrdaya(self.fansec,self.fansec,self.fansec);            
            let minmax=self.calcExt(self.arr);
            self.width=(minmax[1]-minmax[0]);
            self.height=(minmax[3]-minmax[2]);
            let rect=self.node.getComponent(UITransform);
            let scalew=self.width/rect.width;
            let scaleh=self.height/rect.height;
            for(let i=0;i<self.arr.length;i++)
            {
                self.arr[i][0]/=scalew;
                self.arr[i][1]/=scaleh;
            }
            for(let i=0;i<self.slicearr.length;i++)
            {
                self.slicearr[i][0]/=scalew;
                self.slicearr[i][1]/=scaleh;
            }
            minmax[1]/=scalew;
            minmax[3]/=scaleh;
            minmax[0]/=scalew;
            minmax[2]/=scaleh;
            self.width=(minmax[1]-minmax[0]);
            self.height=(minmax[3]-minmax[2]);
            //self.slicearr=self.Hrdaya(self.slicefan,self.slicefan,self.slicefan);
            if(self.slicefan>self.fansec&&self.fansec>20)
                self.slicearr=self.Hrdaya(self.slicefan,self.slicefan,self.slicefan);
            else if(self.fansec>self.slicefan)
            {
                let factor:number=Math.ceil(self.fansec/self.slicefan);
                self.slicearr=[];
                for(let i=0;i<self.arr.length;i++)
                {
                    if(i%factor==0&&self.slicearr.length<self.slicefan)
                    {
                        self.slicearr.push(self.arr[i]);
                    }
                }
                if(self.slicearr.length<self.slicefan)
                {
                    if(self.centerfan)
                        self.slicearr.push(self.arr[self.arr.length-1]);
                }
            }
            else
            {
                self.slicearr=self.arr;
            }
            //console.log(self.width+":"+self.height);
            if(self.drawbox)
                self.drawOutline(1);
        }
        else if(self.mode==1)
        {
            let g_fan=self.node.getComponentInChildren(Graphics);  
            g_fan?.clear();
        }
    }
    stopAnimDraw()
    {
        const self=this;
        self.isAnimDraw=false;
        clearInterval(self.intervalid);
        self.intervalid=0;
    }
    drawFragile(cb:Function)
    {
        let self=this;
        if(self.slicearr.length<1) return;                

        let g=self.g;    
        let node=self.node.getChildByName("Node");                
        if(self.isAnimDraw)
        {
            let g_fan=node!.getComponent(Graphics);         
            if(!g_fan) g_fan=node!.addComponent(Graphics);         
            g_fan!.strokeColor=g.strokeColor; 
            if(self.slicefan<20)
                g_fan!.lineWidth=g.lineWidth*1.5;
            else
                g_fan!.lineWidth=g.lineWidth;
            self.iscb=false;
            self.idx=0;
            self.idx_fan=0;
            self.drawtimes=0;    
            if(cb)
            {                
                cb(self.idx,"clear");
            }
            clearInterval(self.intervalid);
            self.intervalid=setInterval(()=>{
                if(self.idx_fan==0)
                {
                    //g!.clear();
                    g_fan?.clear();
                    g_fan?.moveTo(self.slicearr[0][0],self.slicearr[0][1]);
                    if(self.drawtimes==2&&self.drawbox)
                        self.drawOutline(1);
                }           
                //self.idx=self.Line(g!,self.arr,self.idx);
                //self.idx_fan=self.LineFan(g_fan!,self.slicearr,self.idx_fan);
                self.idx_fan=self.LineSlice(g_fan!,self.slicearr,self.idx_fan);
                if(self.drawtimes>=self.maxtimes)
                {
                    clearInterval(self.intervalid);
                    self.intervalid=0;
                    self.isAnimDraw=false;
                    if(cb){
                        cb(self.drawtimes,"end");                                                                
                    }
                }                
                if(self.drawtimes>=self.maxtimes-1)
                {
                    if(cb&&self.idx_fan>(self.slicefan/2)&&!self.iscb)
                    {
                        self.iscb=true;
                        cb(self.drawtimes,"anim");                        
                    }
                }
                if(cb)
                {
                    cb(self.idx_fan,"idx");
                }
            },self.intval);
        }
        else
        {
            self.idx=0;
            g!.clear();
            g!.moveTo(self.slicearr[0][0],self.slicearr[0][1]);
            for(let i=0;i<self.slicearr.length+1;i++)
            {                
                self.idx=self.Line(g!,self.arr,self.idx);
            }
            if(cb)
                cb(1,"end");
        }
    }
    reDraw(cb:Function)
    {        
        const self=this;
        if(self.mode==0)
        {            
            self.drawFragile(cb);
        }
        else if(self.mode==1)
        {
            self.RoundRect(cb);
        }
    }
    hitHrdaya(pt:Vec2)
    {
        //TODO:横竖屏切换时的判断
        const self=this;
        let n=self.node;
        self.pts=[];        
        let offset:Vec2=new Vec2(0,0);
        let scale:Vec3=self.node.getScale();
        for(let i=0;i<self.arr.length;i++)
        {                            
            self.pts.push(new Vec2(self.arr[i][0]*scale.x+offset.x,self.arr[i][1]*scale.y+offset.y));
        }
        let isin=Intersection2D.pointInPolygon(pt,self.pts);
        return isin;
    }
    ptInRect(pt:Vec2,rect:Vec2[])
    {
        const self=this;
        if(pt.x>rect[0].x&&pt.x<rect[1].x&&pt.y>rect[0].y&&pt.y<rect[1].y)
        {
            return true;
        }
        return false;
    }
    hitRect(pt:Vec2)
    {
        const self=this;
        let n=self.node;
        let rect:Vec2[]=[];
        let offset:Vec2=new Vec2(n.position.x,n.position.y);
        let vs=view.getCanvasSize();
        rect.push(new Vec2(-self.width/2+offset.x+vs.width/2,-self.height/2+offset.y+vs.height/2));
        rect.push(new Vec2(self.width/2+offset.x+vs.width/2,self.height/2+offset.y+vs.height/2));
        let isin=self.ptInRect(pt,rect);
        return isin;
    }
    inHrdaya1(pt:Vec2)
    {
        const self=this;
        if(self.hitmode==0)
        {
            let pta:number[]=[pt.x,pt.y];
            return self.hitRect2(pta);
        }
        else if(self.hitmode==1)
        {            
            let hit:boolean=self.hitHrdaya(pt);
            return hit;
        }
    }
    hitRect1(pt:number[])
    {
        const self=this;
        let n=self.node;        
        let rect:number[][]=[];
        let offset:Vec2=new Vec2(n.position.x,n.position.y);
        let scale:Vec3=new Vec3(n.scale.x,n.scale.y,n.scale.z);
        
        let point:number[]=[];
        screen.windowSize;
        let cs=view.getCanvasSize();
        let ds=view.getDesignResolutionSize();
        point=[pt[0]/cs.width*ds.width,pt[1]/cs.height*ds.height];

        rect.push([self.minx*scale.x+offset.x+ds.width/2,self.miny*scale.y+offset.y+ds.height/2]);
        rect.push([self.maxx*scale.x+offset.x+ds.width/2,self.miny*scale.y+offset.y+ds.height/2]);
        rect.push([self.maxx*scale.x+offset.x+ds.width/2,self.maxy*scale.y+offset.y+ds.height/2]);
        rect.push([self.minx*scale.x+offset.x+ds.width/2,self.maxy*scale.y+offset.y+ds.height/2]);
        let isin=PointInRect.pointInPolygonNested(point,rect);        
        return isin;
    }
    hitRect2(pt:number[])
    {        
        const self=this;
        if(!self.node.active)
        {
            return false;
        }        
        let n=self.node;        
        let rect:number[][]=[];
        let offset:Vec2=new Vec2(n.position.x,n.position.y);
        let scale:Vec3=new Vec3(n.scale.x*1.13,n.scale.y*1.13,n.scale.z*1.13);
        let cs=view.getCanvasSize();
        let ds=view.getDesignResolutionSize();
        let fs=view.getFrameSize();
        let x:number=pt[0]/cs.width*ds.width;
        let y:number=pt[1]/cs.height*ds.height;
        let fh=ds.width/fs.width*fs.height;
        let scaleh=fh/ds.height;
        let pt1=[x-ds.width/2,(y-ds.height/2)*scaleh];
        rect.push([self.minx*scale.x+offset.x,self.miny*scale.y+offset.y]);
        rect.push([self.maxx*scale.x+offset.x,self.miny*scale.y+offset.y]);
        rect.push([self.maxx*scale.x+offset.x,self.maxy*scale.y+offset.y]);
        rect.push([self.minx*scale.x+offset.x,self.maxy*scale.y+offset.y]);
        let isin=PointInRect.pointInPolygonNested(pt1,rect);
        
        return isin;
    }
    drawOutline(scale:number=1)
    {
        const self=this;        
        let rect:Vec2[]=[];   
        let offset:Vec2=new Vec2(0,0);        
        rect.push(new Vec2(self.minx*scale+offset.x,self.miny*scale+offset.y));
        rect.push(new Vec2(self.maxx*scale+offset.x,self.miny*scale+offset.y));
        rect.push(new Vec2(self.maxx*scale+offset.x,self.maxy*scale+offset.y));
        rect.push(new Vec2(self.minx*scale+offset.x,self.maxy*scale+offset.y));
        let box=self.node.getChildByName("box");
        // if(!box)
        // {
        //     box=new Node();
        //     box.name="box"
        //     box.setParent(self.node);
        // }
        let g_box=box.getComponent(Graphics);
        if(!g_box)
        {
            g_box=box.addComponent(Graphics);
        }
        g_box?.clear();        
        g_box!.strokeColor=self.g.strokeColor;
        g_box!.moveTo(rect[0].x,rect[0].y);
        g_box!.lineTo(rect[1].x,rect[1].y);
        g_box!.lineTo(rect[2].x,rect[2].y);
        g_box!.lineTo(rect[3].x,rect[3].y);
        g_box!.lineTo(rect[0].x,rect[0].y);
        g_box!.stroke();
    }
    inHrdaya(pt:Vec2)
    {
        const self=this;
        if(self.mode==0)
        {
            return self.hitRect(pt);
        }
        else if(self.mode==1)
        {
            //TODO:
        }
    }
    Line(g:Graphics,arr:number[][],idx:number)
    {        
        const self=this;
        let tail=Math.floor(Math.sqrt(arr.length));
        if(idx<arr.length)
        {            
            g!.lineTo(arr[idx][0], arr[idx][1]);
            g!.stroke();
            idx+=1;
        }
        else if(idx<=(arr.length+tail))
        {        
            if(idx==arr.length)
            {                
                g!.close();
                g!.stroke();
                g!.fill();                
            }
            idx+=1;
        }
        else
        {         
            g.clear();           
            self.drawtimes++;
            g!.moveTo(arr[0][0], arr[0][1]);
            idx=0;
        }
        return idx;        
    }
    LineSlice(g:Graphics,arr:number[][],idx:number)
    {       
        const self=this; 
        let tail=Math.floor(Math.sqrt(arr.length)*1.5);        
        if(idx<arr.length)
        {         
            if(self.centerfan)
            {
                g!.moveTo(0, 0);
            }
            else
            {
                g!.moveTo(arr[0][0], arr[0][1]);
            }
            g!.lineTo(arr[idx][0], arr[idx][1]);
            g!.stroke();            
            idx+=1;
        }
        else if(idx<=(arr.length+tail))
        {
            idx+=1;
        }
        else
        {            
            g.clear();        
            self.drawtimes++;
            idx=0;
        }
        return idx;        
    }
    LineFan(g:Graphics,arr:number[][],idx:number)
    {       
        const self=this; 
        let tail=Math.floor(Math.sqrt(arr.length));
        if(idx<arr.length)
        {            
            g!.lineTo(arr[idx][0], arr[idx][1]);
            g!.stroke();
            g!.moveTo(arr[0][0], arr[0][1]);//edge
            g!.lineTo(arr[idx][0],arr[idx][1]);
            g!.stroke();
            idx+=1;
        }
        else if(idx<=(arr.length+tail))
        {                    
            idx+=1;
        }
        else
        {         
            g!.clear();           
            self.drawtimes++;
            idx=0;
        }
        return idx;        
    }

    Hrdaya(len:number,pos:number,count:number):number[][]
    {
        const self=this;        
        let num=Math.sqrt(len);
        let x=pos%num;
        let y=Math.trunc(pos/num);
        let arc=0;
        let big=16;
        if(count>=big)
        {
            arc=2*Math.PI/(count+4+count%2);            
        }
        else
        {
            arc=2*Math.PI/(count+4);
        }
        let radius=Math.min(count/Math.PI/4,1.4);
        let start=0;
        let toset=0;
        let half=Math.trunc(Math.ceil(count/2));
        let arr=[];
        for(let i=0;i<count;i++)
        {
            if(count%2==0)
            {
                if(i==1||i==half||i==(half+1)) toset+=1;
            }
            else
            {
                if(count>=big)
                {
                    if(i==0) { toset+=1; } else if(i==(half+1)) { toset+=1.5; }else if(i==(half+2)) { toset+=0.5; }
                }
                else
                {
                    if(i==0) { toset+=1; } else if(i==(half+1)) { toset+=2.0; } else if(i==(half+2)) { toset+=0.5; }
                }
            }
            let xp=radius*16*Math.pow(Math.sin(start+arc*toset),3);
            let yp=radius*(13*Math.cos(start+arc*toset)-5*Math.cos(start+2*arc*toset)-2*Math.cos(start+3*arc*toset)-Math.cos(start+4*arc*toset));
            let offsety=1.7;
            arr.push([xp*1.18*self.xscale,(yp+offsety)*0.18*self.yscale]);
            if(count%2==0)
            {
                toset+=1.0;
            }
            else
            {
                toset+=1.0;
            }
        }
        return arr;
    }
    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
