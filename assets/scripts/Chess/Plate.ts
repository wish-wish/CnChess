import { _decorator, Component, Node, Color, Graphics, UITransform, Size, Vec3, Vec2, Vec4, isUnicodeCJK, fragmentText, Label, math, VERSION, JavaScript, TypeScript, Prefab, instantiate, RichText, RichTextComponent, Quat, LabelComponent, SpriteComponent, SpriteFrame, Texture2D } from 'cc';
import { Utils } from '../Utils';
const { ccclass, property } = _decorator;

@ccclass('Plate')
export class Plate extends Component {
    @property({type:Color})
    public color:Color;
    @property({type:Label})
    public label:Label;

    grap:Graphics=null;
    ut:UITransform=null;
    xPoints:Vec3[]=[];
    
    xPlusPot:number[]=[0,1,2,3,4,5,6,7,8,19,25,27,29,31,33,35];
    
    XRoad:number[]=[3,13,23,21,13,5];
    xWords:number[]=[37,38,41,42];

    blackchs:string[]=[
        "black_ju"
        ,"black_ma"
        ,"black_pao"
        ,"black_xiang"
        ,"black_shi"
        ,"black_jiang"
        ,"black_bing"        
    ];
    redchs:string[]=[
        "red_ju"
        ,"red_ma"
        ,"red_pao"
        ,"red_xiang"        
        ,"red_shi"
        ,"red_shuai"
        ,"red_bing"
    ];
    xChessPos:number[]=[];
    blackpos:number[][]=[[0,0,8],[1,1,7],[2,19,25],[4,3,5],[3,2,6],[5,4],[6,27,29,31,33,35]];
    redpos:number[][]=[[0,0,8],[1,1,7],[2,19,25],[4,3,5],[3,2,6],[5,4],[6,27,29,31,33,35]];
    allpos:Map<number,string>=new Map<number,string>();
    cells:Size;
    rect:Vec3[]=[];
    border:number=15;
    edge:number=20;
    initPos()
    {
        for(let i=0;i<this.blackpos.length;i++)
        {            
            for(let j=1;j<this.blackpos[i].length;j++)
            {
                this.redpos[i][j]=this.xPoints.length-this.blackpos[i][j]-1;                
                this.allpos.set(this.blackpos[i][j],this.blackchs[this.blackpos[i][0]]);
                this.allpos.set(this.redpos[i][j],this.redchs[this.redpos[i][0]]);                
            }
        }
        this.xChessPos=[];
        for(let i=0;i<this.xPlusPot.length;i++)
        {
            this.xChessPos.push(this.xPlusPot[i]);
        }
        for(let i=0;i<this.xPlusPot.length;i++)
        {
            this.xChessPos.push(this.xPoints.length-this.xPlusPot[i]-1);
        }
    }
    start() {
        this.grap=this.getComponent(Graphics);
        if(!this.grap)
        {
            console.warn("please add graphic to the node");
            return;
        }
        this.grap.color=this.color;
        this.ut=this.getComponent(UITransform);
        this.draw();
        this.initPos();
        console.log("start");        
        Utils.loadPrefabs("cell/Chess",(prefab:Prefab)=>{
            this.allpos.forEach((img:string,key:number)=>{
                let n=instantiate(prefab);
                let rtc=n.getComponentInChildren(RichTextComponent);
                rtc.string="<img src='"+img+"'/>";
                rtc.lineHeight=100;
                rtc.fontSize=100;
                rtc.node.active=true;
                // let sprite=n.getComponentInChildren(SpriteComponent);
                // sprite.node.active=true;
                // sprite.spriteFrame=new SpriteFrame();
                // sprite.spriteFrame.texture=new Texture2D();
                // sprite.spriteFrame.texture.
                // n.setParent(this.node);
                // n.setPosition(this.xPoints[key]);                
                //let scale=Math.sqrt((this.cells.width/90));
                //n.setScale(new Vec3(scale,scale,scale));
            });
            //let words:string="<color=#00ff00>楚河界汉</color>";
            let words:string="楚河界汉";
            for(let i=0;i<this.xWords.length;i++)
            {
                let n=instantiate(prefab);
                let rtc=n.getComponentInChildren(RichTextComponent);
                rtc.string=words[i];                
                rtc.fontSize=50;
                n.setParent(this.node);                
                n.setPosition(this.xPoints[this.xWords[i]].add(new Vec3(this.cells.width/2,this.cells.height/2,0)));
                if(i>1)
                {                    
                    let quat=math.Quat.fromEuler(n.rotation,0,0,180)
                    n.setRotation(quat);
                }                
            }          
            let ords:string="九八七六五四三二一987654321";
            for(let i=0;i<ords.length;i++)
            {
                let n=instantiate(prefab);
                let rtc=n.getComponentInChildren(RichTextComponent);
                rtc.string=ords[i]; 
                rtc.fontSize=30;               
                n.setParent(this.node);    
                let idx=i;
                if(i>8) 
                {
                    idx=this.xPoints.length-i-1;
                    let pos=new Vec3(this.xPoints[idx].x,this.rect[2].y,0);
                    n.setPosition(pos);
                }
                else
                {
                    let pos=new Vec3(this.xPoints[idx].x,this.rect[0].y,0);
                    n.setPosition(pos);
                }                
            }
        });        
    }        
    draw()
    {                
        let border=25,edge=20;
        this.border=border;
        this.edge=edge;
        let s=this.ut.contentSize;
        this.grap.strokeColor=Color.RED;
        //bigbox
        let pts:Vec3[]=[];        
        pts.push(new Vec3(-s.width/2+border,-s.height/2+border,0));
        pts.push(new Vec3(-s.width/2+border,s.height/2-border,0));
        pts.push(new Vec3(s.width/2-border,s.height/2-border,0));
        pts.push(new Vec3(s.width/2-border,-s.height/2+border,0));
        this.rect.push(...pts);
        //points
        let row=9,col=8;
        let width=(s.width-border*2-edge*2)/(col+1);
        let height=(s.height-border*2-edge*2)/(row+1);
        this.cells=new Size(width,height);
        this.grap.strokeColor=Color.RED;
        for(let i=0;i<row+1;i++)
        {
            for(let j=0;j<col+1;j++)
            {
                this.xPoints.push(new Vec3(border+edge+width*(j+0.5)-s.width/2,border+edge+height*(i+0.5)-s.height/2,0));
            }
        }
        this.grap.stroke();
        //this.grap.strokeColor=Color.BLUE;
        this.grap.moveTo(pts[pts.length-1].x,pts[pts.length-1].y);
        for(let i=0;i<pts.length;i++)
        {   
            this.grap.lineTo(pts[i].x,pts[i].y);
        }        
        
        for(let i=0;i<col+1;i++)
        {
            let leftx=pts[0].x+i*width+width/2+edge;
            let lefty=pts[0].y+height/2+edge
            if(i>0&&i<col)
            {
                this.grap.moveTo(leftx,lefty);
                this.grap.lineTo(leftx,lefty+height*4);
                this.grap.moveTo(leftx,lefty+height*5);
                this.grap.lineTo(leftx,lefty+height*9);
            }
            else
            {
                this.grap.moveTo(leftx,lefty);
                this.grap.lineTo(leftx,lefty+height*9);
            }            
        }
        for(let i=0;i<row+1;i++)
        {
            let leftx=pts[0].x+width/2+edge;
            let lefty=pts[0].y+height/2+edge;
            this.grap.moveTo(leftx,lefty+height*i);
            this.grap.lineTo(leftx+s.width-border*2-width-edge*2,lefty+height*i);
        }
        
        this.grap.moveTo(this.xPoints[this.XRoad[0]].x,this.xPoints[this.XRoad[0]].y);
        for(let i=1;i<this.XRoad.length;i++)
        {
            let idx=this.XRoad[i];
            this.grap.lineTo(this.xPoints[idx].x,this.xPoints[idx].y);
        }
        this.grap.moveTo(this.xPoints[this.xPoints.length-this.XRoad[0]-1].x,this.xPoints[this.xPoints.length-this.XRoad[0]-1].y);
        for(let i=1;i<this.XRoad.length;i++)
        {
            let idx=this.xPoints.length-this.XRoad[i]-1;
            this.grap.lineTo(this.xPoints[idx].x,this.xPoints[idx].y);
        }

        this.drawCorss(0,0);        
        for(let i=0;i<this.xPlusPot.length;i++)
        {
            let p=this.xPoints[this.xPlusPot[i]];            
            this.drawCorss(p.x,p.y);
            let p1=this.xPoints[this.xPoints.length-this.xPlusPot[i]-1];
            this.drawCorss(p1.x,p1.y);
        }
        
        this.grap.stroke();     
        
        this.unicodeTest();
    }
    unicodeTest()
    {
        let v=this.hex2Num('$1FA60');
        console.log(v);
        //this.label.string=String.fromCodePoint(v);
        // this.label.string=String.fromCharCode(0x1FA60)+String.fromCodePoint(129632);        
        // this.label.string='0x1FA60';
        // this.label.string='\u{1FA60}';
        // this.label.string=String.fromCodePoint(...[0x1FA60]);
        //TODO:query and display javascript version
    }
    parseHex(str:string,i:number)
    {
        // escape()	使用转义序列替换某些字符来对字符串进行编码
        // unescape()	对使用 escape() 编码的字符串进行解码
        // encodeURI()	通过转义某些字符对 URI 进行编码
        // decodeURI()	对使用 encodeURI() 方法编码的字符串进行解码
        // encodeURIComponent()	通过某些转义字符对 URI 的组件进行编码
        // deencodeURIComponent()	对使用 encodeURIComponent() 方法编码的字符串进行解码

        // ES6新增了几个专门处理4字节码点的函数。
        // String.fromCodePoint()：从Unicode码点返回对应字符
        // String.prototype.codePointAt()：从字符返回对应的码点
        // String.prototype.at()：返回字符串给定位置的字符
        
        let ret:number=0;
        if(i<str.length)
        {
            let ch=str[i];
            if(ch=='A'||ch=='a')
            {
                ret=10;
            }
            else if(ch=='B'||ch=='b')
            {
                ret=11;
            }
            else if(ch=='C'||ch=='c')
            {
                ret=12;
            }
            else if(ch=='D'||ch=='d')
            {
                ret=13;
            }
            else if(ch=='E'||ch=='e')
            {
                ret=14;
            }
            else if(ch=='F'||ch=='f')
            {
                ret=15;
            }
            else
            {                
                ret=Number.parseInt(ch);                
            }
        }else
        {
            ret=0;   
        }    
        return ret;    
    }
    hex2Num(str:string)
    {
        let ret:number=0,hex:number=1;
        for(let i=0;i<str.length-1;i++)
        {            
            let val=this.parseHex(str,str.length-1-i);            
            ret+=val*hex;
            //console.log(val+":"+hex+":"+ret);
            hex*=16;
        }
        return ret;
    }
    drawCorss(x:number,y:number)
    {
        let p:Vec3=new Vec3(x,y,0);
        let plslen=13,spare=7;
        if(p.x-spare>this.xPoints[0].x &&p.x-spare<this.xPoints[this.xPoints.length-1].x
            &&p.y-spare>this.xPoints[0].y&&p.y-spare<this.xPoints[this.xPoints.length-1].y)
        {
            this.grap.moveTo(p.x-spare-plslen,p.y-spare);
            this.grap.lineTo(p.x-spare,p.y-spare);
            this.grap.lineTo(p.x-spare,p.y-spare-plslen);
        }
        
        if(p.x-spare>this.xPoints[0].x &&p.x-spare<this.xPoints[this.xPoints.length-1].x
            &&p.y+spare>this.xPoints[0].y&&p.y+spare<this.xPoints[this.xPoints.length-1].y)
        {
            this.grap.moveTo(p.x-spare-plslen,p.y+spare);
            this.grap.lineTo(p.x-spare,p.y+spare);
            this.grap.lineTo(p.x-spare,p.y+spare+plslen);
        }
        if(p.x+spare>this.xPoints[0].x&&p.y+spare>this.xPoints[0].y
            &&p.x+spare<this.xPoints[this.xPoints.length-1].x
            &&p.y+spare<this.xPoints[this.xPoints.length-1].y
            )
        {
            this.grap.moveTo(p.x+spare+plslen,p.y+spare);
            this.grap.lineTo(p.x+spare,p.y+spare);
            this.grap.lineTo(p.x+spare,p.y+spare+plslen);
        }
        if(p.x+spare>this.xPoints[0].x &&p.x+spare<this.xPoints[this.xPoints.length-1].x
            &&p.y-spare>this.xPoints[0].y&&p.y-spare<this.xPoints[this.xPoints.length-1].y)
        {
            this.grap.moveTo(p.x+spare+plslen,p.y-spare);
            this.grap.lineTo(p.x+spare,p.y-spare);
            this.grap.lineTo(p.x+spare,p.y-spare-plslen);
        }
    }

    update(deltaTime: number) {
        //this.draw();
    }
}

