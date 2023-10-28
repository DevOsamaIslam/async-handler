import { asyncHandler } from ".."

async function fetchData(): Promise<string> {
  // Simulating an asynchronous operation
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully")
    }, 1000)
  })
}

async function main() {
  const [result, error] = await asyncHandler(fetchData)
  if (error) {
    console.error("An error occurred:", error)
  } else {
    console.log("Result:", result)
  }
}

main()
