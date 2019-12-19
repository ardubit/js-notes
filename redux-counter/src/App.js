import {connect} from "react-redux";
import Counter from "./Counter";

function mapStateToProps(state) {
    return {
        countValue: state.count
    };
}

var increaseAction = {type: "increase"};
var decreaseAction = {type: "decrease"};