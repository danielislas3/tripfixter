exports.downloadCv = (req, res, next) => {
  res.download('assets/DanielResume.pdf', (err) => {
    if (err) {
      console.log(err)
    } else {

      console.log('success')
    }
  })
}