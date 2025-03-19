#!/bin/bash

DB_USER="your_db_user"
DB_NAME="your_db_name"

echo "Applying migrations..."
for file in migrations/*.sql; do
    echo "Running $file..."
    psql -U $DB_USER -d $DB_NAME -f "$file"
done

echo "Seeding database..."
for file in seeds/*.sql; do
    echo "Running $file..."
    psql -U $DB_USER -d $DB_NAME -f "$file"
done

echo "Database setup complete!"
