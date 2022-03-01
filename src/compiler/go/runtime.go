package main

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/url"
	"time"
)

type Request struct {
	Method  string
	Path    string
	Body    []byte
	Headers map[string]string
}

func fetch(request Request) *http.Response {
	req, err := http.NewRequest(request.Method, "https://discord.com/api/v9"+request.Path, bytes.NewReader(request.Body))
	if err != nil {
		panic(err)
	}

	for key, value := range request.Headers {
		req.Header.Set(key, value)
	}

	res, err := http.DefaultClient.Do(req)
	if err != nil {
		panic(err)
	}

	defer res.Body.Close()
	return res
}

func main() {
	time.Sleep(time.Second * 0)
	url.PathEscape("")
	json.Marshal(nil)
}