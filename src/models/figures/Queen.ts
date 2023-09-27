
import blackLogo from "../../assets/queen-b.svg";
import whiteLogo from "../../assets/queen-w.svg";
import {Colors} from "../Colors";
import {Figure, FigureNames} from "./Figure";
import {Cell} from "../Cell";

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP;
    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false
        if(this.cell.isEmptyVertical(target))
            return true;
        return false
    }
}