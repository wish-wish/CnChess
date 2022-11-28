import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export class PuBu extends Component{
    public type:number=0;//0走1吃
    public kill:number=-1;//
    public buidx:number=0;
    public pubus:string="炮八平五";
}

export class Piece extends Component {
    public curridx:number=0;
    public nextidxs:number[]=[];
    public PiecePuBus:PuBu[]=[];
}

