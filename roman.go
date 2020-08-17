package main

// func main()  {
// 	arg := os.Args[1]

// 	i, err := strconv.Atoi(arg)
//     if err != nil {
//         // handle error
//         fmt.Println(err)
//         os.Exit(2)
//     }

// 	fmt.Println(i, romanize(i))
// }

func romanize(num int) string {
	values := []int{
		1000, 900, 500, 400,
		100, 90, 50, 40,
		10, 9, 5, 4, 1,
	}

	romans := []string{
		"M", "CM", "D", "CD",
		"C", "XC", "L", "XL",
		"X", "IX", "V", "IV",
		"I"}
	roman := ""
	i := 0
	for num > 0 {
		k := num / values[i]
		for j := 0; j < k; j++ {
			roman += romans[i]
			num -= values[i]
		}
		i++
	}
	return roman
}
