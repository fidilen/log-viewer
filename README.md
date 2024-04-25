# log-viewer

pm2 start index.js --name log-viewer --max-memory-restart 100M --cron-restart="0 0 * * *" --log-date-format "YYYY-MM-DD HH:mm";