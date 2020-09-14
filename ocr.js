var Ocr = {
    digit_patterns: [
        '010101111000',
        '000001001000',
        '010011110000',
        '010011011000',
        '000111001000',
        '010110011000',
        '010110111000',
        '010001001000',
        '010111111000',
        '010111011000'
    ]
};
Ocr.convert = function (input) {
    var ocrlines = this.lineBreak(input);
    var answers = ocrlines.map(this.readDigits.bind(this));
    return answers.join(',');
};
Ocr.readDigits = function (ocrline) {
    var ocr_digits = this.slicePlace(ocrline);
    var answer = ocr_digits.map(this.readOneDigit.bind(this));
    return answer.join('');
};
Ocr.readOneDigit = function (oneline) {
    var chars = oneline.split('');
    var pattern = chars.map(function (c) { return c == ' ' ? 0 : 1; });
    var pattern_str = pattern.join('');
    var digit = '?';
    this.digit_patterns.forEach(function (p, i) {
        var is_matched = p == pattern_str;
        if (is_matched) digit = i;
    });
    return digit.toString();
};
Ocr.lineBreak = function (raw_input) {
    var splitted = raw_input.split('\n');
    var each_sliced = splitted.each_slice(4);
    var rejoined = each_sliced.map(function (block) { return block.join('\n'); });
    return rejoined;
};
Ocr.slicePlace = function (ocrline) {
    var rows = ocrline.split('\n');
    var sliced = rows.map(function (strline) {
        return strline.each_slice(3);
    });
    var transformed = sliced[0].map(function (_, i) {
        var col = sliced.map(function (row) {
            return row[i];
        });
        return col;
    });
    var strlines = transformed.map(function (ocr) {
        return ocr.join('');
    });
    return strlines;
};

Array.prototype.each_slice = function (size) {
    var reciever = [];
    for (var i = 0; i < this.length; i += size) {
        reciever.push(this.slice(i, i + size));
    }
    return reciever;
};
String.prototype.each_slice = function (size) {
    var reciever = [];
    for (var i = 0; i < this.length; i += size) {
        reciever.push(this.slice(i, i + size));
    }
    return reciever;
};

module.exports = Ocr;