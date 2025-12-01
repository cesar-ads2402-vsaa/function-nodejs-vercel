export default function handler(req, res) {
  const name = req.query.name || 'mundo';
  res.status(200).json({ message: `Olá, ${name}!` });
}
