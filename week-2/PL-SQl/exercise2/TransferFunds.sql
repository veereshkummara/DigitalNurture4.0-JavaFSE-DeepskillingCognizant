CREATE OR REPLACE PROCEDURE TransferFunds(
  fromAccount IN NUMBER,
  toAccount IN NUMBER,
  amount IN NUMBER
) IS
  fromBalance NUMBER;
BEGIN
  -- Get balance of source account
  SELECT Balance INTO fromBalance FROM Accounts WHERE AccountID = fromAccount FOR UPDATE;

  -- Check sufficient balance
  IF fromBalance < amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds');
  END IF;

  -- Deduct from source
  UPDATE Accounts
  SET Balance = Balance - amount,
      LastModified = SYSDATE
  WHERE AccountID = fromAccount;

  -- Add to destination
  UPDATE Accounts
  SET Balance = Balance + amount,
      LastModified = SYSDATE
  WHERE AccountID = toAccount;

  COMMIT;
END;
