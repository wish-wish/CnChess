import { _decorator, Component, Node } from 'cc';
import { Utils } from '../Utils';
const { ccclass, property } = _decorator;

@ccclass('Qipu')
export class Qipu extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    public static parse(steps:string)
    {
        let step:string[]=steps.split('');
        for(let i=0;i<step.length;i++)
        {
            let idx=i;
            let pieces="车马跑象士将兵車馬炮相仕帥卒帅將";
            let dirs="进退平進";
            let vertidxs="九八七六五四三二一987654321";
            //let fbs="前后";
            //let fb=fbs.indexOf(step[idx]);
            let idxpiece=pieces.indexOf(step[idx]);
            let idxp=idxpiece%Utils.redchs.length;
            let dir=dirs.indexOf(step[idx])%3;            
            let vertidx=vertidxs.indexOf(step[idx]);      
            let pics="";
            let x=0,y=0;
            if(idxpiece>13){
                idxp=5;
            }
            if(vertidx>8)
            {
                pics=Utils.redchs[idxp];
            }
            else
            {
                pics=Utils.blackchs[idxp];
            }
            if(dir==0)
            {
                //...
                y=y+(vertidx%9+1);
            }
            else if(dir==1)
            {
                //...
            }
            else
            {
                //...
            }
        }        
    }
}

