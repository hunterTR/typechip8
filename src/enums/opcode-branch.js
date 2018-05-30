"use strict";
exports.__esModule = true;
var OpcodeBranch;
(function (OpcodeBranch) {
    OpcodeBranch[OpcodeBranch["ZERO"] = 0] = "ZERO";
    OpcodeBranch[OpcodeBranch["GOTO"] = 1] = "GOTO";
    OpcodeBranch[OpcodeBranch["CALL_SUBROUTINE"] = 2] = "CALL_SUBROUTINE";
    OpcodeBranch[OpcodeBranch["SKIP_NEXT_IF_EQUALS"] = 3] = "SKIP_NEXT_IF_EQUALS";
    OpcodeBranch[OpcodeBranch["SKIP_NEXT_IF_NOT_EQUALS"] = 4] = "SKIP_NEXT_IF_NOT_EQUALS";
    OpcodeBranch[OpcodeBranch["SKIP_NEXT_IF_REGISTER_EQUAL"] = 5] = "SKIP_NEXT_IF_REGISTER_EQUAL";
    OpcodeBranch[OpcodeBranch["SET_REGISTER_TO_VAL"] = 6] = "SET_REGISTER_TO_VAL";
    OpcodeBranch[OpcodeBranch["ADD_TO_REGISTER"] = 7] = "ADD_TO_REGISTER";
    OpcodeBranch[OpcodeBranch["REGISTER_OP"] = 8] = "REGISTER_OP";
})(OpcodeBranch = exports.OpcodeBranch || (exports.OpcodeBranch = {}));
var RegisterOperation;
(function (RegisterOperation) {
    RegisterOperation[RegisterOperation["SET_REGISTER_TO_REGISTER"] = 0] = "SET_REGISTER_TO_REGISTER";
    RegisterOperation[RegisterOperation["SET_REGISTER_OR"] = 1] = "SET_REGISTER_OR";
    RegisterOperation[RegisterOperation["SET_REGISTER_AND"] = 2] = "SET_REGISTER_AND";
    RegisterOperation[RegisterOperation["SET_REGISTER_XOR"] = 3] = "SET_REGISTER_XOR";
    RegisterOperation[RegisterOperation["ADD_REGISTER"] = 4] = "ADD_REGISTER";
    RegisterOperation[RegisterOperation["SUBSTRACT_REGISTER"] = 5] = "SUBSTRACT_REGISTER";
    RegisterOperation[RegisterOperation["SET_REGISTER_SHIFT_RIGHT"] = 6] = "SET_REGISTER_SHIFT_RIGHT";
    RegisterOperation[RegisterOperation["SUBSTRACT_REGISTER_OPPOSITE"] = 7] = "SUBSTRACT_REGISTER_OPPOSITE";
    RegisterOperation[RegisterOperation["SET_REGISTER_SHIFT_LEFT"] = 14] = "SET_REGISTER_SHIFT_LEFT";
})(RegisterOperation = exports.RegisterOperation || (exports.RegisterOperation = {}));
