function sumRequestHandler(req, res) {
  let sum;
  const body = []
  req.on('data', chunk => body.push(chunk))
  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString()
    const entriesBody = new URLSearchParams(parsedBody);
    const actualData = Object.fromEntries(entriesBody)
    sum = Number(actualData.num1) + Number(actualData.num2)
  })
  res.write('<html>')
  res.write('<head> <title>Calculator-result</title> </head>')
  res.write('<body>')
  res.write('<h1>Here You can see the result of your calculation</h1>')
  res.write(`<h1>The Sum is : ${sum}</h1>`)
  res.write('</body>')
  res.write('</html>')
  res.end()

}

exports.sumRequestHandler = sumRequestHandler;
