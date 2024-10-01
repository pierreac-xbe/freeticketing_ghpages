# Fetch Latest Tickets

This guide provides instructions on how to fetch the latest tickets from your ticket database using SQL query files.

:::info
This guide is only applicable when using FreeTicketing without XBE. If you're using FreeTicketing with XBE, the SQL queries are automatically managed and updated through the XBE API, and you don't need to manually set up or modify any SQL queries.
:::

## File Structure

1. Create a `queries` folder in the same directory as the FreeTicketing executable.
2. Inside this folder, create one or more `.sql` files containing your queries to fetch the latest tickets.
3. We recommend using an alphanumeric naming convention for these SQL files (e.g., `01_fetch_recent_tickets.sql`, `02_fetch_open_tickets.sql`).

```
|-FreeTicketing.exe
|-- queries/
    |-- 01_first.sql
    |-- 02_second.sql
```

## Execution

The program will automatically sort these files in alphanumeric order and execute them in order.

## SQL File Content

Each SQL file should contain the necessary queries to fetch the latest tickets. The specific content will depend on your database schema and requirements. 

:::tip
There's no need to include pagination or limit clauses in your SQL queries, as the program automatically handles these aspects.
:::

:::warning
Ensure that your queries are optimized for performance, especially when dealing with large datasets.
:::

## Example query

Example SQL query to fetch latest tickets.
Specifically, this example query fetches tickets loaded or modified
in the last 24 hours, ordered by loaded time in ascending order.

```sql
SELECT -- keep select on its own line; This helps with pagination
    ticket_id
    ,ticket_number
    ,ticket_at -- ideally is in UTC, iso8601 format
    ,unit_of_measure
    ,quantity
    ,is_voided
    ,job_number
    ,truck_id
    ,truck_name
    ,location_id
    ,location_name
    ,customer_id
    ,customer_name
FROM
    TicketDatabase
WHERE
    ticket_id IS NOT NULL
    AND (
      ticket_at >= DATEADD(hour, -24, GETDATE())
      OR
      modified_at >= DATEADD(hour, -24, GETDATE())
    )
ORDER BY
    ticket_at ASC
```
