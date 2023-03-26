// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({
    status: { code: 200 },
    rows: [
      {
        name: "John Wick: Chapter 4 (IMAX 2D)",
        umur17: "D17+",
        src: "/images/john2.jpg",
        style: "margin: 50px",
      },
      {
        name: "John Wick: Chapter 4",
        umur17: "D17+",
        src: "/images/john.jpg",
      },
      {
        name: "Dungeons & Dragons: Honor Among Thieves ",
        umur: "SU",
        src: "/images/danger.png",
      },
      {
        name: "Mrs. Chatterjee vs. Norwa",
        umur13: "R13+",
        src: "/images/norway.png",
      },
      {
        name: "Shazam! Fury of the Gods",
        umur13: "R13+",
        src: "/images/shazam.png",
      },
      {
        name: "Suzume",
        umur: "SU",
        src: "/images/suzume.png",
      },
      {
        name: "Jin Qorin",
        umur17: "D17+",
        src: "/images/jin.png",
      },
      {
        name: "Hantu Baru",
        umur13: "R13+",
        src: "/images/hantu.png",
      },
    ],
    total_rows: 10,
    total_page: 2,
  });
}
