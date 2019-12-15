  
import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(express.json());

let orders = [
{
	"orderId": 542354,
	"orderList": [
	{
		"id": 1,
    "price": 2000,
		"quantity":2
	},
	{
		"id": 2,
    "price": 4000,
		"quantity": 1
	}
	]
}
];

let serverStateFilePath = "./serverState.json"; 

app.get('/orders', function (req, res) {
  res.send(orders);
});


app.get('/orders/:orderId', (req, res)=> {
  let id=parseInt(req.params.orderId);
  let found = false;
  orders.forEach((order)=>{
    if(order.orderId===id) 
    {res.send(order); found = true;}
  })
  if (!found) res.status(404).send({err:404});
});

app.post('/orders', (req, res) => {
  const newOrder = req.body;
  let dupl=false;
  orders.forEach(order=>{
    if(order.orderId === newOrder.orderId) {
      res.sendStatus(304);
      dupl=true;
    }
  });
  if(!dupl){
    console.log(newOrder);
    orders.push(newOrder);
    res.send(newOrder);
    fs.writeFileSync(serverStateFilePath, JSON.stringify(orders, null, 4));
  }
});

app.put('/orders', (req, res) => {
  const modifiedOrder = req.body;
  let present=false;

  for (var i = 0; i < orders.length; i++)
  {
    console.log(orders[i].orderId + " = " + modifiedOrder.orderId );
	  if (orders[i].orderId===modifiedOrder.orderId)
	  {
      orders[i].orderList=modifiedOrder.orderList;
      res.send(orders[i]);
      present=true;
      fs.writeFileSync(serverStateFilePath, JSON.stringify(orders, null, 4));
      break;
	  }
  }

  if(!present) res.sendStatus(304);
});

app.delete('/orders/:id', (req, res) => {
  let id=parseInt(req.params.id);
  let toDeleted=false;
  let index = 0;
  for (var i = 0; i < orders.length; i++)
  {
    console.log(orders[i].orderId + " = " + id );
	  if (orders[i].orderId === id)
	  {
		  index = i;
		  toDeleted = true;
	  }
  }
  if (toDeleted)
  {
	  orders.splice(index, 1);
    res.sendStatus(200);
    fs.writeFileSync(serverStateFilePath, JSON.stringify(orders, null, 4));
  }
  else
  {
	  res.sendStatus(304);
  }
});

app.listen(8080, () => {
  if (fs.existsSync(serverStateFilePath)) {
    orders = JSON.parse(fs.readFileSync(serverStateFilePath));
    console.log(orders);
  }
  console.log('Example app listening on port 8080!');
}
);
