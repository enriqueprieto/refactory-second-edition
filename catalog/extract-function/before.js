function printOwing(invoice) {
    printBanner()

    let outstanding = calculateOutstanding()

    // exibe detalhes
    console.log(`name: ${invoice.customer}`)
    console.log(`amount: ${outstanding}`)
}