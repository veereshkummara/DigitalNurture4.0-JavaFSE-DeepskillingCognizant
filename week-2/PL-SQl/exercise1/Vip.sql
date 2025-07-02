BEGIN
  FOR rec IN (SELECT CustomerID FROM Customers WHERE Balance > 10000)
  LOOP
    UPDATE Customers
    SET IsVIP = 'TRUE'
    WHERE CustomerID = rec.CustomerID;
  END LOOP;
  COMMIT;
END;
