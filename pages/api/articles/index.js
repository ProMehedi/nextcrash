import { articles } from '../../../sample-data'

export default (req, res) => {
  res.status(200).json(articles)
}
