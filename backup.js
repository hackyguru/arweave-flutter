const lighthouse = require('@lighthouse-web3/sdk');

async function main() {
  const apiKey = "a8ba37d6.e8d6c9742f7e4a3582d19e389bff0221";
  const uploadResponse = await lighthouse.upload('./', apiKey);

  const cid = uploadResponse.data.Hash;
  console.log(`Uploaded to IPFS : ${cid}`);
  process.stdout.write(`::set-output name=cid::${cid}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});