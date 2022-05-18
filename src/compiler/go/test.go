package main

import "fmt"

type MessageType int

const (
	MessageTypeDefault MessageType = 0
	Balls                          = "balls"
)

type Message struct {
	Type MessageType `json:"type"`
}

type Client struct{}

func (client *Client) fetch(param string) string {
	return "/channels/" + param
}

func main() {
	str := "quote: \"\nparagraph separator: \u2029\ninvisible thing: \u200b\nother invisible thing: ​"

	fmt.Println(fmt.Sprintf("%q", str))

	msg := Message{
		Type: 4,
	}

	fmt.Println(fmt.Sprintf("%+v", msg))

	client := Client{}
	client.fetch("balls")
}