import Header from "./_components/Header";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="">
      <div className="h-full w-full bg-[#384D48] text-center text-2xl">
        <Header />
      </div>
    </main>
  );
}
