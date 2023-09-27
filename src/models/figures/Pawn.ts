import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/pawn-b.svg";
import whiteLogo from "../../assets/pawn-w.svg";

export class Pawn extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP;
    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false
        return true
    }
}