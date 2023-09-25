import { host } from "./constants";

export async function getPoints(): Promise<number[][] | undefined> {
  try {
    const url = `${host}/api/score?${new URLSearchParams({
      secret: process.env.SECRET ?? "",
    })}`;
    const res = await fetch(url, {
      next: {
        revalidate: 60,
      },
    });

    const json = await res.json();

    const data: string[][] = json.result;

    return data.map((d1) => {
      return d1.map((d) => {
        return parseInt(d);
      });
    });
  } catch (e) {
    return undefined;
  }
}
