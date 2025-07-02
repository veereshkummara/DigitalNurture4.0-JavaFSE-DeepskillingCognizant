BEGIN
  FOR rec IN (SELECT c.CustomerID, l.LoanID, l.InterestRate, c.DOB
              FROM Customers c
              JOIN Loans l ON c.CustomerID = l.CustomerID) 
  LOOP
    IF MONTHS_BETWEEN(SYSDATE, rec.DOB) / 12 > 60 THEN
      UPDATE Loans
      SET InterestRate = InterestRate - 1
      WHERE LoanID = rec.LoanID;
    END IF;
  END LOOP;
  COMMIT;
END;
