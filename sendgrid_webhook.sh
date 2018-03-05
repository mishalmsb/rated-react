function localtunnel {
  lt -s blahblahemailratemeasdaqdsdfsdfwe0x0x0 --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
