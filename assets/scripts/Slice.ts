import { _decorator, Component, Node, EditBox, ToggleComponent } from 'cc';
import { Hrdaya } from './Hrdaya';
const { ccclass, property } = _decorator;

@ccclass('Slice')
export class Slice extends Component {
    start() {
        let eb=this.node.getChildByName("EditBox").getComponent(EditBox);
        let feb=this.node.getChildByName("fanEditBox").getComponent(EditBox);
        let hd=this.getComponentInChildren(Hrdaya);
        if(hd.fansec<4)
        {
            hd.fansec=4;            
        }
        if(hd.slicefan<2)
        {
            hd.slicefan=2;
        }        
        if(hd.slicefan>(hd.fansec-1))
        {
            hd.slicefan=(hd.fansec-1);
        }
        eb.string=hd.fansec.toString();
        feb.string=hd.slicefan.toString();
        let tog=this.node.getChildByName("Toggle").getComponent(ToggleComponent);
        hd.centerfan=tog.isChecked;
        this.clampSpeed();
    }

    update(deltaTime: number) {
        
    }
    clampSpeed()
    {
        let hd=this.getComponentInChildren(Hrdaya);
        let speed=hd.intval*hd.slicefan;
        if((speed/1000)>hd.speeds[1])
        {
            hd.intval=hd.speeds[1]*1000/hd.slicefan;
        }else if((speed/1000)<hd.speeds[0])
        {
            hd.intval=hd.speeds[0]*1000/hd.slicefan;
        }   
    }
    onReturn()
    {
        let eb=this.node.getChildByName("EditBox").getComponent(EditBox);
        let feb=this.node.getChildByName("fanEditBox").getComponent(EditBox);
        let hd=this.getComponentInChildren(Hrdaya);
        let tog=this.node.getChildByName("Toggle").getComponent(ToggleComponent);
        hd.centerfan=tog.isChecked;
        let num=20,fnum=20;
        try {
            num=Number.parseInt(eb.string);    
            fnum=Number.parseInt(feb.string);
        } catch (error) { 
                       
        }
        if(num<4)
        {
            num=4;            
        }
        if(fnum<2)
        {
            fnum=2;
        }
        if(fnum>(num-1))
        {
            fnum=(num-1);
        }
        hd.fansec=num;
        hd.slicefan=fnum;
        eb.string=hd.fansec.toString();
        feb.string=hd.slicefan.toString();
        this.clampSpeed();
        hd.Draw();    
        hd.reCurve();
        hd.reDraw((t:number,act:string)=>{            
        });
    }

    onCheck()
    {
        let tog=this.node.getChildByName("Toggle").getComponent(ToggleComponent);
        let hd=this.getComponentInChildren(Hrdaya);
        hd.centerfan=tog.isChecked;
        // hd.Draw();    
        // hd.reCurve();
        // hd.reDraw((t:number,act:string)=>{            
        // });
    }
}

