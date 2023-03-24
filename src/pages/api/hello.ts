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
        contact: "hello@example",
        question: "random question",
        status: "on progress",
        src: "/images/john2.jpg",
        style: "margin: 50px",
      },
      {
        name: "Mrs. Chatterje vs. Norway",
        content:
          "Magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "/images/john.jpg",
      },
      {
        name: "Shazam! Fury of the Gods",
        content:
          "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "/images/danger.png",
      },
      {
        name: "roman picisan",
        content:
          "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "/images/norway.png",
      },
      {
        name: "ga roman picisan",
        content:
          "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "/images/shazam.png",
      },
      {
        name: "ga roman picisan",
        content:
          "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "/images/suzume.png",
      },
      {
        name: "ga roman picisan",
        content:
          "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway",
        contact: "contact@example",
        question: "random",
        status: "on progress",
        src: "/images/jin.png",
      },
      {
        name: "ga roman picisan",
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
