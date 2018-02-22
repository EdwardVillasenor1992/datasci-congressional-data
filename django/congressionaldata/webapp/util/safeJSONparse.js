/**
 * Parse a JSON string using try..catch.
 * @param  {String} JSONstring - The JSON string to attempt parsing.
 * @return {Object} Object with the error value if parsing failed, or the parsed
 * data if successful.
 */
function safeJSONParse(JSONstring) {
    let data;
    try {
        data = JSON.parse(JSONstring);
    } catch (err) {
        return { error: err, data };
    }
    return { error: null, data };
}

module.exports = safeJSONParse;
