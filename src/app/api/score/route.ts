import { GoogleSpreadsheet } from "google-spreadsheet";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // const secret = request.nextUrl.searchParams.get("secret");
  // if (secret !== process.env.SECRET)
  //   return NextResponse.json({ error: "invalid secret" }, { status: 401 });
  // const data = await getPoints(); 運用時はスプレッドシートから取得
  const data = [
    [714, 756, 678, 848],
    [796, 749, 785, 752],
  ];
  return NextResponse.json({
    result: data,
  });
}

const doc = new GoogleSpreadsheet(process.env.ID ?? "", {
  apiKey: process.env.GOOGLE_PRIVATE_KEY ?? "",
});

async function getPoints() {
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  await sheet.loadCells("A1:Z100");

  const isHide = sheet.getCellByA1("C39").value?.toString() == "true";

  const M1 = sheet.getCellByA1("D38").value;
  const M2 = sheet.getCellByA1("E38").value;
  const M3 = sheet.getCellByA1("F38").value;
  const M4 = sheet.getCellByA1("G38").value;
  const H1 = sheet.getCellByA1("H38").value;
  const H2 = sheet.getCellByA1("I38").value;
  const H3 = sheet.getCellByA1("J38").value;
  const H4 = sheet.getCellByA1("K38").value;

  const data = [
    [M1, M2, M3, M4],
    [H1, H2, H3, H4],
  ];

  return isHide ? undefined : data;
}
