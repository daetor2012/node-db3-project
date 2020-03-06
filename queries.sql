-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT "ProductName", "CategoryName"
FROM Product;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select s.CompanyName as Company, o.Id as Id
from [Order] as o
join [Shipper] as s on o.ShipVia = s.Id
where o.OrderDate < '2012-08-09';
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select p.ProductName as Name, o.Quantity as Quantity
from [Product] as p
join [OrderDetail] as o on p.Id = o.ProductId
where o.OrderId = 10251
ORDER BY ProductName;
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select o.Id as OrderID, c.CompanyName as CompanyName,  e.LastName as LastName
from [Order] as o
left join [Customer] as c on o.CustomerId = c.Id
left join [Employee] as e on o.EmployeeId = e.Id


