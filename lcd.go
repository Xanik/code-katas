package main

var none = "   "
var left = "  |"
var midl = " _ "
var mglt = " _|"
var mdrt = "|_ "
var full = "|_|"
var both = "| |"

func compileSegment() {
	numSeg := map[string]interface{}{
		"1": []string{none, left, left},
		"2": []string{midl, milt, mdrt},
		"3": []string{midl, milt, milt},
		"4": []string{none, full, left},
		"5": []string{midl, mdrt, mdlt},
		"6": []string{midl, mdrt, full},
	}
}
