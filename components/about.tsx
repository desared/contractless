import { ArrowUpRight, Eye, Lock, Scale, Hammer } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const ACTONDATA_URL = "https://actondata.io";

const principleItems = [
  { icon: Eye, key: "clarity" },
  { icon: Lock, key: "privacy" },
  { icon: Scale, key: "rigour" },
  { icon: Hammer, key: "craft" },
] as const;

const statItems = ["focus", "approach", "reach"] as const;

export function About() {
  const t = useTranslations("About");

  return (
    <>
      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t("eyebrow")}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-foreground md:text-5xl">
              {t("heading")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
              {t("intro")}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild>
                <a href={ACTONDATA_URL} target="_blank" rel="noreferrer noopener">
                  {t("visitSite")}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">{t("backHome")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] md:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl">
            {t("mission.heading")}
          </h2>
          <div className="space-y-5">
            <p className="leading-relaxed text-pretty text-muted-foreground">
              {t("mission.body")}
            </p>
            <p className="leading-relaxed text-pretty text-muted-foreground">
              {t("mission.body2")}
            </p>
            <p className="border-l-2 border-foreground pl-4 text-base font-medium text-foreground">
              {t("mission.closing")}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t("principles.heading")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
              {t("principles.subheading")}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {principleItems.map((principle) => (
              <div
                key={principle.key}
                className="border border-border bg-card p-6 transition-colors hover:border-foreground/20"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center bg-foreground/5">
                  <principle.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {t(`principles.items.${principle.key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`principles.items.${principle.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl">
              {t("company.heading")}
            </h2>
            <div className="space-y-5">
              <p className="leading-relaxed text-pretty text-muted-foreground">
                {t("company.body")}
              </p>
              <p className="leading-relaxed text-pretty text-muted-foreground">
                {t("company.body2")}
              </p>
            </div>
          </div>

          <dl className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-3">
            {statItems.map((stat) => (
              <div key={stat} className="bg-card p-6">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                  {t(`company.stats.${stat}.label`)}
                </dt>
                <dd className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                  {t(`company.stats.${stat}.value`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col items-start gap-6 border border-border bg-card p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                {t("contact.heading")}
              </h2>
              <p className="mt-3 leading-relaxed text-pretty text-muted-foreground">
                {t("contact.body")}
              </p>
            </div>
            <Button asChild className="shrink-0">
              <a href={ACTONDATA_URL} target="_blank" rel="noreferrer noopener">
                {t("contact.cta")}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
