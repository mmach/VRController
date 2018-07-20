
const ActionsGen = (action) => {
    return {
        SUCCESS: action + "_SUCCESS",

        ERROR: action + "_ERROR",

        LOADING: action + "_LOADING",
        
        FINALLY: action + "_FINALLY"
    };
}
module.exports = { ActionsGen };