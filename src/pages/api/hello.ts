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
        umur: "D17+",
        src: "/images/john2.jpg",
        style: "margin: 50px",
      },
      {
        name: "John Wick: Chapter 4",
        umur: "D17+",
        src: "/images/john.jpg",
      },
      {
        name: "Dungeons & Dragons: Honor Among Thieves ",
        umur1: "SU",
        src: "/images/danger.png",
      },
      {
        name: "Mrs. Chatterjee vs. Norwa",
        content:
          "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "/images/norway.png",
      },
      {
        name: "Shazam! Fury of the Gods",
        content:
          "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "/images/shazam.png",
      },
      {
        name: "Suzume",
        content:
          "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "/images/suzume.png",
      },
      {
        name: "Jin Qorin",
        content:
          "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "/images/jin.png",
      },
      {
        name: "Hantu Baru",
        content:
          "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "/images/hantu.png",
      },
    ],
    total_rows: 10,
    total_page: 2,
  });
}
