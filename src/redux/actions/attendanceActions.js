import { START_TIMER, STOP_A_BREAK, STOP_TIMER, TAKE_A_BREAK } from "../constants/attendanceContants"

export const startTimer=()=>{
    return {
        type:START_TIMER,
    }
}

export const stopTimer=()=>{
    return {
        type:STOP_TIMER,
    }
}

export const takeABreak=()=>{
    return {
        type:TAKE_A_BREAK,
    }
}

export const stopABreak=()=>{
    return {
        type:STOP_A_BREAK,
    }
}