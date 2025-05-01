function FindProxyForURL(url, host) {
  if (isInNet(host, "10.176.0.0", "255.255.0.0") ||
      isInNet(host, "10.172.0.0", "255.255.0.0"))
    return "SOCKS 127.0.0.1:18890";  return "DIRECT";
}
