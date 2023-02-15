import { _decorator, Component, Node, EditBox } from 'cc';
import { Hrdaya } from './Hrdaya';
const { ccclass, property } = _decorator;

@ccclass('Slice')
export class Slice extends Component {
    start() {
        let eb=this.node.getComponentInChildren(EditBox);
        let hd=this.getComponentInChildren(Hrdaya);
        eb.string=hd.fansec.toString();
    }

    update(deltaTime: number) {
        
    }

    onReturn()
    {
        let eb=this.node.getComponentInChildren(EditBox);
        let hd=this.getComponentInChildren(Hrdaya);
        let num=20;
        try {
            num=Number.parseInt(eb.string);    
        } catch (error) {            
        }
        hd.fansec=num;
        let speed=hd.interval*hd.fansec;
        if((speed/1000)>hd.speeds[1])
        {
            hd.interval=hd.speeds[1]*1000/hd.fansec;
        }else if((speed/1000)<hd.speeds[0])
        {
            hd.interval=hd.speeds[0]*1000/hd.fansec;
        }    
        hd.Draw();    
        hd.reCurve();
        hd.reDraw((t:number,act:string)=>{            
        });
    }
}

