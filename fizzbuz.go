package main

import (
	"fmt"
)

func main() {
	for i := 0; i < 100; i++ {
		FizzBuzz(i)
	}
}

// FizzBuzz ...
func FizzBuzz(i int) {
	var f = i%3 == 0
	var b = i%5 == 0
	if f {
		if b {
			fmt.Print("FizzBuzz\n")
			return
		}
		fmt.Print("Fizz\n")
		return
	}
	if b {
		fmt.Print("Buzz\n")
		return
	}
	fmt.Print(i)
	fmt.Print("\n")
}
