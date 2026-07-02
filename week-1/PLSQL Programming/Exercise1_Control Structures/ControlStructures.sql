-- Exercise 1: Control Structures

--------------------------------------------------------
-- Scenario 1:
-- Apply 1% discount to loan interest rates
-- for customers above 60 years old.
--------------------------------------------------------

BEGIN

    FOR cust IN (
        SELECT CustomerID, Age
        FROM Customers
    ) LOOP

        IF cust.Age > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

END;
/

--------------------------------------------------------
-- Scenario 2:
-- Promote customers to VIP if balance > 10000.
--------------------------------------------------------

BEGIN

    FOR cust IN (
        SELECT CustomerID, Balance
        FROM Customers
    ) LOOP

        IF cust.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

END;
/

--------------------------------------------------------
-- Scenario 3:
-- Print reminders for loans due within 30 days.
--------------------------------------------------------

BEGIN

    FOR loan_rec IN (

        SELECT c.Name,
               l.LoanID,
               l.DueDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30

    ) LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Dear ' ||
            loan_rec.Name ||
            ', your Loan ID ' ||
            loan_rec.LoanID ||
            ' is due on ' ||
            TO_CHAR(loan_rec.DueDate, 'DD-MON-YYYY')
        );

    END LOOP;

END;
/