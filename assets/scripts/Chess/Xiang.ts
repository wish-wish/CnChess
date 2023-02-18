import { _decorator, Component, Node } from 'cc';
import { Piece } from './Piece';
const { ccclass, property } = _decorator;

@ccclass('Xiang')
export class Xiang extends Piece {
    start() {

    }

    update(deltaTime: number) {
        
    }

    public getIdx(str:string)
    {
        //...
        return this.curridx;
    }
}

