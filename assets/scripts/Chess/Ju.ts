import { _decorator, Component, Node } from 'cc';
import { Piece } from './Piece';
const { ccclass, property } = _decorator;

@ccclass('Ju')
export class Ju extends Piece {
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

