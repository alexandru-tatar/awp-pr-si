# Angebot

## Micro-App-Plattform: KI-Apps im Intranet der Hochschule Karlsruhe

![][image1]  
Dieses Angebot nennt Leistung, Termine und Preis für das Projekt Micro-App-Plattform (Vibe-Coding Intranet-Plattform) der Hochschule Karlsruhe.

| Feld | Angabe |
| :---- | :---- |
| Angebotsnummer | AWP-WS26-01 |
| Datum | 12.10.2026 |
| Gültig bis | 23.10.2026 |
| Auftraggeber | Hochschule Karlsruhe (HKA), Prof. Dr. Rainer Neumann und Dr. Günther Schreiner |
| Auftragnehmer | Vibe-Coding AG, Moltkestraße 30, 76133 Karlsruhe (\[Teamname\], Studienteam Anwendungsprojekt WS 2026/27) |
| Vertragsart | Werkvertrag (§ 631 ff. BGB) mit agilem Phasenfestpreis |
| Angebotsgrundlage | Konzeptpräsentation „Micro-App-Plattform“ (AWP 2026/27) und die Gespräche mit dem Auftraggeber |

**Inhalt**

1. [Executive Summary](#(1)-executive-summary)
2. [Ausgangslage und Auftragsverständnis](#(2)-ausgangslage-und-auftragsverständnis)
3. [Zielbild und Nutzen](#(3)-zielbild-und-nutzen)
4. [Lösungskonzept](#(4)-lösungskonzept)
5. [Leistungsumfang und Liefergegenstände](#(5)-leistungsumfang-und-liefergegenstände) (mit Abgrenzung)
6. [Vorgehen und Projektorganisation](#(6)-vorgehen-und-projektorganisation)
7. [Voraussetzungen, Mitwirkung und Annahmen](#(7)-voraussetzungen,-mitwirkung-und-annahmen)
8. [Qualität, Erfolgs- und Abnahmekriterien](#(8)-qualität,-erfolgs--und-abnahmekriterien)
9. [Termin- und Meilensteinplan](#(9)-termin--und-meilensteinplan)
10. [Vergütung](#(10)-vergütung)
11. [Änderungsverfahren](#(11)-änderungsverfahren)
12. [Übergabe und Weiterbetrieb](#(12)-übergabe-und-weiterbetrieb)
13. [Angebots- und Vertragsbedingungen](#(13)-angebots--und-vertragsbedingungen)
14. [Anlagen](#(14)-anlagen)
15. [Annahmeerklärung](#annahmeerklärung)

# (1) Executive Summary {#(1)-executive-summary}

Die HKA baut mit KI-Assistenten Apps in Stunden statt in Monaten. Ohne gemeinsame Regeln entstehen daraus Einzellösungen: Jede App sieht anders aus, hat ein eigenes Login und läuft auf einem eigenen Rechner. Wir liefern bis zum 29.01.2027 eine Plattform für diese Apps. Fachexpertinnen und Fachexperten bauen mit einem KI-Assistenten Micro-Apps. Die Apps sehen gleich aus, bestehen automatische Prüfungen und erscheinen nach der Freigabe im Intranet-Portal. Sicherheit, Deployment und Serverbetrieb übernimmt die Plattform im Hintergrund.

Die Plattform hat drei Teile:

* **Entwicklung:** Zwei Starter-Projekte („Golden Master“) für Python (FastAPI) und JavaScript (Express). Dazu kommen Regeln für die KI, damit jede neue App gleich aufgebaut ist und gleich aussieht.  
* **Pipeline:** Jeder Pull Request durchläuft automatische Prüfungen. Eine zweite Person gibt ihn frei. Danach rollt die Pipeline die App aus.  
* **Betrieb:** Ein Portalrahmen übernimmt Login, Rollen und Sessions. Er trägt neue Apps automatisch in das Menü ein.

Wir setzen auf Standardtechnik (Docker Compose statt Kubernetes). Das Team der HKA kann die Plattform ohne Spezialwissen betreiben. Der erste Durchstich durch alle drei Teile steht am 20.11.2026. Der Festpreis beträgt 45.000 € zuzüglich Umsatzsteuer, in vier Phasen abgerechnet.

# (2) Ausgangslage und Auftragsverständnis {#(2)-ausgangslage-und-auftragsverständnis}

Die HKA nutzt Vibe-Coding schon, zum Beispiel für User-Lifecycle-Management, Business Intelligence, einfachere Prozesse und den Zugriff auf Informationen. Eine Person schreibt der KI, was sie braucht („Bau mir eine Webanwendung, die die Auslastung pro Studiengang zeigt“), und die App steht kurz darauf. Aus dem Projekt mit Anforderung, Konzept, Umsetzung und Test wird ein Prompt.

Dieses Wachstum führt zu Einzellösungen mit vier Problemen:

* **Verschiedene Oberflächen:** Jede App sieht anders aus, nutzt andere Bibliotheken, hat zu wenig Kontrast und ist nicht barrierefrei.  
* **Sicherheitsrisiken:** KI-Code kann Secrets im Klartext enthalten oder Fehler bei der Anmeldung machen. Jede App baut ein eigenes Login.  
* **Einzellösungen:** Apps laufen lokal oder auf verstreuten VMs. Niemand weiß, unter welcher URL sie erreichbar sind. Mail, Intranet und CMS sind nicht angebunden.  
* **Keine Konventionen:** Jede App startet mit anderen Befehlen (`npm start`, `npm run web`, `python main.py`). Dokumentation fehlt oft. Das erschwert den Betrieb über längere Zeit.

Die HKA will das Tempo erhalten und die Qualität verbessern. Die KI baut die App schnell. Hosting, Betrieb und Risiko bleiben bei der Fachkraft. Diese kennt sich damit nicht aus und soll sich damit nicht befassen müssen. Die Zielgruppe sind Fachexpertinnen und Fachexperten ohne Entwicklungserfahrung. Sie beschreiben der KI, was sie brauchen, und erhalten eine App, die Regeln, Prüfungen und Betrieb schon enthält.

# (3) Zielbild und Nutzen {#(3)-zielbild-und-nutzen}

Nach dem Projekt startet eine Fachexpertin eine neue Micro-App aus einem Starter-Projekt, baut sie mit der KI und bringt sie per geprüftem Pull Request ins Intranet-Portal. Die Tabelle nennt die Ziele und die Erfolgskriterien, an denen die HKA den Nutzen erkennt. Erfolgskriterien und Abnahmekriterien sind getrennt: Abnahmekriterien zeigen, dass wir geliefert haben (siehe (5) und (8)). Erfolgskriterien zeigen, dass die Plattform wirkt.

| Ziel | Erfolgskriterium |
| :---- | :---- |
| Schnell starten | Ein neues Projekt aus einem Starter läuft nach dem Klonen mit denselben fünf Befehlen (dev, start, test, lint, docker). |
| Gleiches Aussehen und Barrierefreiheit | Apps aus beiden Startern folgen denselben Regeln (Hochschul-CSS, Kontrast, einfache Sprache). |
| Sicherheit ohne Expertenwissen | Der Secret-Scan blockiert jeden Pull Request mit erkanntem Secret. Jede Änderung gibt eine zweite Person frei. |
| Alles an einem Ort | Nach dem Deployment erscheint die App im Portal-Menü. Login und Rollen kommen vom Portal. |
| Betrieb über längere Zeit | Start, Stopp und Neustart laufen mit Docker Compose und sind dokumentiert. |
| Nutzung durch Fachpersonal | Fachexpertinnen und Fachexperten bauen im Pilot ohne Hilfe des Teams eine App und bringen sie ins Portal. |

# (4) Lösungskonzept {#(4)-lösungskonzept}

Eine App durchläuft drei Teile. Sie entsteht lokal aus einem Starter. Eine Pipeline prüft sie und rollt sie aus. Danach läuft sie im Portalrahmen, der Login und Rollen für sie übernimmt. Die Fachexpertin arbeitet nur im ersten Teil.

* **Entwicklung:** Jeder Starter enthält eine feste Projektstruktur, die Befehle `dev`, `start`, `test`, `lint` und `docker`, Docker Compose, einen Health Check, eine `manifest.json` und eine Konfiguration für VS Code (DevContainer). Die Datei `AGENTS.md` steuert die KI als Orchestrator: Sie verweist auf die Skills und legt fest, wann die KI welchen Skill nutzt. Die Regeln zu Aufbau, Aussehen und Sicherheit stehen in den Skills. Der Ordner `.agents/skills` enthält sieben Skills: design, barrierefreiheit, ui-regeln, schnittstellen, portal, pipeline-fehler und secrets. Die KI lädt `AGENTS.md` immer und einen Skill nur bei Bedarf. Die Skill ui-regeln legt fest: Navigation als Baum links, Dialoge mit genau zwei Buttons, einfache Sprache. Die KI hält Entscheidungen laufend in der README fest. So lässt sich eine App später nachvollziehen oder neu bauen.  
* **Pipeline:** Ein Pull Request startet sechs Prüfungen: Secret-Scan (Gitleaks), Manifest-Check, Lint, Tests, Docker-Build und die Freigabe durch eine zweite Person (Vier-Augen-Prinzip). Schlägt eine Prüfung fehl, ist der Merge gesperrt. Nach dem Merge baut die Pipeline das Docker-Image, startet den Container auf einer HKA-VM, wartet auf den Health Check und trägt die App im Portal ein.  
* **Betrieb:** Der Portalrahmen meldet Nutzer über Shibboleth (OAuth2/OIDC) an. Das Security-Gateway prüft jede Anfrage. Die Session liegt in Redis, der Browser erhält nur ein Cookie. Das Gateway gibt die Identität als Header (X-User-Id, X-User-Roles) an die App weiter. Die App sieht keine Tokens und keine Passwörter. Neue Apps melden sich über ihr Manifest an (Name, Kategorie, Menüpunkt, Rollen) und erscheinen im Menübaum, zum Beispiel unter Studium, Verwaltung oder Kommunikation. Jede App läuft in einem eigenen Container.

Die Plattform sichert die Qualität in einem Kreislauf aus fünf Schritten:

| Schritt | Was passiert | Ergebnis im Projekt |
| :---- | :---- | :---- |
| Entwickeln | Die KI baut die App aus dem Starter. | Golden Master mit Skills |
| Prüfen | Die Pipeline führt alle Prüfungen aus. | Pipeline und Review-Pflicht |
| Simulieren | Wir spielen Fehler durch: eine rote Pipeline und ein Secret im Code. Die KI erklärt den Fehler und räumt auf. Neuen Schlüssel erzeugen und den alten widerrufen muss die Fachexpertin selbst. | Skills pipeline-fehler und secrets, Portal-Tresor |
| Qualität prüfen | Die KI baut eine feste Testaufgabe, zum Beispiel „Baue eine Noten-Übersicht“. Eine Person prüft von Hand, ob die KI die sieben Regeln einhält. Das Ergebnis ist ein Score in Prozent. | Prüfprotokolle |
| Qualität sichern | Wir ergänzen die Skills an den Stellen, die im Protokoll fehlen. Danach läuft der Test erneut. Aus den Protokollen entsteht ein Skript, das jede Regel bei jedem Lauf automatisch prüft. | Prüfskript für die Regeln |

Gegen Secrets im Code gibt es drei Sicherungen: einen Commit-Hook, die Push Protection von GitHub und den Secret-Scan in der Pipeline.

Apps greifen direkt auf Fachsysteme zu. Einen Proxy für diese Zugriffe liefern wir nicht (siehe Abgrenzung in (5)).

## Technologien und Standards {#technologien-und-standards}

Wir legen diese Werkzeuge und Standards fest:

| Bereich | Festlegung |
| :---- | :---- |
| Entwicklungsumgebung | Visual Studio Code mit Erweiterungen, EditorConfig und DevContainer |
| Starter (Backend) | Python mit FastAPI, JavaScript mit Express |
| Frontend | HTML und CSS nach den Gestaltungsregeln (Hochschul-CSS) |
| KI-Regeln | `AGENTS.md` und Skills je Repository, nutzbar mit Cursor, GitHub Copilot oder Claude Code |
| Linter | Ruff (Python), ESLint (JavaScript) |
| Code und Pipeline | GitHub mit GitHub Actions, Secret-Scan mit Gitleaks, Manifest-Check |
| Container und Betrieb | Docker und Docker Compose mit Health Check auf HKA-VMs (Proxmox) |
| Login und Session | Shibboleth über OIDC, Session-Speicher Redis |

# (5) Leistungsumfang und Liefergegenstände {#(5)-leistungsumfang-und-liefergegenstände}

Wir liefern vier Arbeitspakete (AP), zwei Referenz-Apps, einen Pilot und die Dokumentation. Die Pakete laufen parallel, damit früh ein Durchstich durch alle Teile entsteht. Die letzte Spalte nennt den Nachweis für die Abnahme.

| Liefergegenstand | Ergebnis | Abnahmenachweis |
| :---- | :---- | :---- |
| AP1 Portal | Portalrahmen mit Menübaum nach Kategorien, Registry für App-Manifeste (`manifest.json`), automatische Aufnahme neuer Apps in das Menü | Eine registrierte App erscheint ohne manuelle Änderung im Menü |
| AP2 Golden Master | Starter für Python (FastAPI) und JavaScript (Express), `AGENTS.md` als Orchestrator und sieben Skills mit den Regeln, Gestaltungsregeln auf Basis des Hochschul-CSS (Menü links, Dialog mit zwei Buttons, Kontrast, einfache Sprache), Schnittstellenbeschreibungen für Mail, Noten und E-Akte (soweit die HKA sie bereitstellt), DevContainer für VS Code, Anleitung für Fachexpertinnen, KI-Tests mit Prüfprotokoll und Prüfskript | Zwei Apps aus verschiedenen Startern folgen denselben Regeln. Die Linter laufen ohne Fehler. Das Prüfskript meldet für die Testaufgabe 7 von 7 Regeln bestanden |
| AP3 Pipeline | GitHub Actions mit Secret-Scan, Manifest-Check, Lint, Tests und Docker-Build, Pflicht-Freigabe durch eine zweite Person, Deployment mit Docker Compose auf einer HKA-VM, Eintrag im Portal, Health Check und Neustart | Ein Merge rollt die App aus, und sie ist im Portal erreichbar. Eine rote Prüfung sperrt den Merge |
| AP4 Sicherheit | Security-Gateway, Login über Shibboleth (OIDC), Rollen, Session in Redis, Weitergabe der Identität als Header, Ablage für Secrets im Portal („Meine Secrets“), drei Sicherungen gegen Secrets im Code | Login mit Hochschul-Account. Eine App sieht nur die Rollen der angemeldeten Person. Ein Secret im Code blockiert den Merge |
| Zwei Referenz-Apps | Je eine App pro Starter mit Login und Logout. Eine zeigt „Was steht heute an?“ aus dem eigenen Postfach (Exchange), die andere die eigenen Noten. Liegt ein Zugang nicht vor, zeigt die App Testdaten | Live-Demo in der Abschlusspräsentation |
| Pilot | Fachexpertinnen und Fachexperten der HKA bauen mit einem Starter eine App und bringen sie ins Portal. Wir begleiten sie und werten die Ergebnisse aus | Eine App aus dem Pilot läuft im Portal |
| Dokumentation | README je Repository, Architektur (C4 Level 1 bis 2), Betriebsanleitung (Start, Stopp, Neustart, Fehlerfall), Anleitung für neue Apps | Übergabe als Markdown im Repository |

Gegenüber der Konzeptpräsentation liefert AP2 keine eigene Web-Component-Bibliothek. Wir beschreiben das Aussehen als Regeln für die KI. So entsteht kein Code, der nach kurzer Zeit veraltet.

## Abgrenzung {#abgrenzung}

Nicht im Leistungsumfang enthalten sind:

* Produktivbetrieb, Wartung und Support nach der Abnahme (kann getrennt vereinbart werden)  
* eine eigene UI-Komponentenbibliothek  
* Migration oder Umbau bestehender Apps der HKA  
* ein Adapter-Proxy und ein Token-Konzept für den Zugriff auf Fachsysteme  
* ein dritter Starter, zum Beispiel für Streamlit  
* Anbindung weiterer Fachsysteme (zum Beispiel Nextcloud oder ein neues HIS) und Referenz-Apps für die E-Akte  
* ein Sicherheitsaudit oder Penetrationstest der Plattform  
* Schulungen über eine Einführung in der Abschlusspräsentation hinaus  
* Hardware, Lizenzen und Kosten für KI-Dienste

# (6) Vorgehen und Projektorganisation {#(6)-vorgehen-und-projektorganisation}

Wir arbeiten mit Scrum in Sprints von zwei Wochen. Am Ende jedes Sprints zeigen wir dem Auftraggeber im Review den Stand. Aufgaben verwalten wir in einem gemeinsamen Jira-Board, Code und Dokumentation in GitHub. Leistungsort ist Karlsruhe (Hochschule und Arbeitsplätze der Teammitglieder).

## Rollen und Ansprechpartner {#rollen-und-ansprechpartner}

Diese Personen tragen im Projekt die Verantwortung:

| Rolle | Person | Aufgabe |
| :---- | :---- | :---- |
| Ansprechpartner Auftraggeber | Prof. Dr. Rainer Neumann, Dr. Günther Schreiner | Anforderungen, Prioritäten, Abnahme |
| Projektleitung | \[Name\] | Planung, Kommunikation mit dem Auftraggeber, Eskalation |
| AP1 Portal | \[Name\] | Verantwortung für AP1 |
| AP2 Golden Master | \[Name\] | Verantwortung für AP2 und die KI-Tests |
| AP3 Pipeline | \[Name\] | Verantwortung für AP3 |
| AP4 Sicherheit | \[Name\] | Verantwortung für AP4 |

## Entscheidungen und Eskalation {#entscheidungen-und-eskalation}

So arbeiten wir zusammen:

* **Operative Rückfragen:** Ansprechperson der HKA und Projektteam, per Element oder E-Mail.  
* **Fachliche Entscheidungen:** Prof. Dr. Rainer Neumann und Dr. Günther Schreiner.  
* **Änderungen an Umfang oder Terminen:** gemeinsame schriftliche Freigabe nach (11).  
* **Blockaden:** Die Projektleitung eskaliert direkt an den Auftraggeber.

## Team und Qualifikation {#team-und-qualifikation}

Unser Team arbeitet täglich mit KI-Assistenten. Wir kennen die Fehler, die KI-Code enthält, und bauen die Regeln dagegen. Am 06.10. und 07.10.2026 haben wir die Architekturdiagramme nach dem C4-Modell (Level 1 und 2) erstellt. Mit den Startern beginnen wir nach der Angebotspräsentation am 22.10.2026, im Kickoff am 26.10.2026. Als kleines Team bieten wir kurze Wege und persönliche Betreuung. Die Preise sind ein Kooperationssatz für die Hochschule.

# (7) Voraussetzungen, Mitwirkung und Annahmen {#(7)-voraussetzungen,-mitwirkung-und-annahmen}

Unsere Planung beruht auf diesen Voraussetzungen. Die HKA stellt sie vor dem Kickoff oder, wenn nicht anders genannt, bis zum Ende von Phase 1 (30.10.2026) bereit. Der Durchstich am 20.11.2026 hängt davon ab. Verzögert sich eine Mitwirkung, verschieben sich die davon abhängigen Termine um denselben Zeitraum.

| Voraussetzung | Verantwortlich | Relevanz |
| :---- | :---- | :---- |
| Zugänge zu GitHub, Noten, E-Akte und Exchange (mit Testpostfach und Testdaten) | HKA | Durchstich und Referenz-Apps |
| Shibboleth-Testumgebung (OIDC) | HKA | Portal-Login und Durchstich |
| Server im HKA-Netz (Proxmox-VMs) mit installiertem Docker | HKA | Test, Deployment und Betrieb des Portals |
| GitHub-Organisation oder Repository-Bereich der Hochschule | HKA | Code, Pipeline und Freigabe von Pull Requests |
| Hochschul-CSS mit Logos und Schnittstellenbeschreibungen für Mail, Noten und E-Akte | HKA | Gestaltungsregeln, Skills und Referenz-Apps |
| Ansprechperson je Thema (Login, Server, Mail) und fachliche Entscheidungen ohne Wartezeit | HKA | Entscheidungen und Abnahme |
| Teilnahme an den Sprint-Reviews | HKA | Abnahme je Phase |
| Fachexpertinnen und Fachexperten für den Pilot (KW 1 bis 3) | HKA | Test unter Praxisbedingungen |
| Offene Technikfragen im Kickoff klären (Zugriff auf Fachsysteme, Datenhaltung) | HKA und Projektteam | Kann den Aufwand ändern |

Außerdem beruht das Angebot auf diesen Annahmen:

* Das Team besteht aus fünf Personen mit je 15 Stunden pro Woche.  
* Die Projektlaufzeit endet mit der Abnahme am 29.01.2027.  
* Wir verarbeiten nur Testdaten und eigene Daten der Teammitglieder, keine Daten Dritter.  
* Dieses Angebot legt die Zielzustände fest. Wie wir einzelne interne Teile umsetzen (zum Beispiel Hosting-Modell und Datenhaltung), klären wir in den Phasen 1 und 2 mit der HKA.

# (8) Qualität, Erfolgs- und Abnahmekriterien {#(8)-qualität,-erfolgs--und-abnahmekriterien}

## Qualitätssicherung und Definition of Done {#qualitätssicherung-und-definition-of-done}

Eine Aufgabe gilt als abgeschlossen, wenn diese Punkte erfüllt sind:

* Die Funktion ist getestet und erfüllt den Abnahmenachweis aus (5). Beispiele sind ein Deployment-Durchlauf oder die Sperre bei einem erkannten Secret.  
* Ruff und ESLint finden keine Fehler, und mindestens eine zweite Person hat den Code freigegeben.  
* Die Dokumentation (README, Architektur nach C4, Betriebsanleitung) ist auf dem aktuellen Stand.  
* Es gibt keine kritischen Fehler, die Kernfunktion oder Sicherheit betreffen.

Die Sprint-Reviews alle zwei Wochen dienen als Kontrolle durch die HKA. Testergebnisse, Prüfprotokolle und Reviews halten wir im Jira-Board und in GitHub fest.

## Kennzahlen {#kennzahlen}

Wir messen den Projekterfolg an diesen Zielwerten:

| Kennzahl | Beschreibung | Zielwert |
| :---- | :---- | :---- |
| Erfolgsrate der Pipeline | Anteil der gemergten Pull Requests, die Secret-Scan und Lint bestanden haben | 100 % |
| Regeltreue der KI | Anteil der sieben Regeln, die die KI in der Testaufgabe einhält (Prüfskript) | 7 von 7 |
| Nutzung der Starter | Fachexpertinnen und Fachexperten bauen mit den Startern Apps und bringen sie ins Portal | mindestens eine App aus dem Pilot im Portal und Live-Demos in der Abschlusspräsentation |

## Abnahme {#abnahme}

Wir zeigen jede Phase im Sprint-Review und nehmen sie anhand der Abnahmenachweise aus (5) ab. Bei den Phasen 1 bis 3 erklärt der Auftraggeber die Abnahme innerhalb von 10 Werktagen oder nennt die Mängel schriftlich. Die Endabnahme von Phase 4 findet in der Abschlusspräsentation am 29.01.2027 statt. Geringe Mängel verhindern die Abnahme nicht. Wir beheben sie in der folgenden Phase.

# (9) Termin- und Meilensteinplan {#(9)-termin--und-meilensteinplan}

Das Projekt läuft vom Kickoff am 26.10.2026 (KW 44) bis zur Endabnahme am 29.01.2027. Vom 21.12.2026 bis zum 01.01.2027 arbeiten wir nicht am Projekt. Ein Meilenstein gilt als erreicht, wenn die Liefergegenstände samt Abnahmenachweis vorliegen. Die Termine gelten, wenn die Mitwirkung aus (7) rechtzeitig erfolgt.

| Phase | Zeitraum | Meilenstein |
| :---- | :---- | :---- |
| 1 Grundlagen | 26.10. bis 30.10.2026 (KW 44, 1 Woche) | Kickoff ist erfolgt. Architektur (C4 Level 1 bis 2), Repositories und GitHub Actions stehen. Die Zugänge aus (7) liegen vor. |
| 2 Durchstich | 02.11. bis 20.11.2026 (KW 45 bis 47, 3 Wochen) | Durchstich am 20.11.2026: Eine App geht per Pull Request live, erscheint im Portal, und der Login über Shibboleth funktioniert. |
| 3 Ausbau | 23.11. bis 18.12.2026 und 04.01. bis 15.01.2027 (KW 48 bis 51 und KW 1 bis 2, 6 Wochen ohne Weihnachtspause) | Starter, Skills, Gestaltungsregeln, Schnittstellen, Secret-Ablage und Referenz-Apps (ab KW 49) sind fertig. Die KI-Tests laufen (KW 47 bis 3). Der Pilot beginnt in KW 1. |
| 4 Abschluss | 18.01. bis 29.01.2027 (KW 3 bis 4, 2 Wochen) | Pilot ausgewertet. Dokumentation, Übergabe und Abschlusspräsentation sind fertig. Endabnahme am 29.01.2027. |

# (10) Vergütung {#(10)-vergütung}

Der Festpreis für den Leistungsumfang beträgt 45.000 € zuzüglich gesetzlicher Umsatzsteuer. Wir bieten einen agilen Phasenfestpreis an: Jede Phase hat einen Festpreis. Innerhalb einer Phase kann der Auftraggeber Anforderungen mit gleichem Aufwand ohne Mehrkosten tauschen.

| Phase | Wochen | Aufwand (h) | Festpreis (€) |
| :---- | :---- | :---- | :---- |
| 1 Grundlagen | 1 | 75 | 3.750 |
| 2 Durchstich | 3 | 225 | 11.250 |
| 3 Ausbau | 6 | 450 | 22.500 |
| 4 Abschluss | 2 | 150 | 7.500 |
| Summe | 12 | 900 | 45.000 |

Die Kalkulation geht von fünf Personen mit je 15 Stunden pro Woche über 12 Arbeitswochen aus. Der Stundensatz beträgt 50 €. Der Satz ist ein Kooperationssatz für die Hochschule und liegt unter den Sätzen von Freiberuflern (Median in DACH: 90 €; Junior-Entwickler: 45 bis 65 €).

* **Rechnungsstellung:** je Phase nach der Abnahme, zahlbar innerhalb von 30 Tagen netto.  
* **Zusatzaufwand:** Änderungen außerhalb des Leistungsumfangs rechnen wir nach schriftlicher Abstimmung mit 50 € pro Stunde ab (siehe (11)).  
* **Nebenkosten:** keine. Wir nutzen Open-Source-Werkzeuge und die Infrastruktur der Hochschule. Reisekosten entstehen nicht.

# (11) Änderungsverfahren {#(11)-änderungsverfahren}

Wir nehmen Änderungswünsche jederzeit auf. Innerhalb einer Phase tauschen wir Anforderungen mit gleichem Aufwand ohne Mehrkosten. Geht eine Änderung über den Umfang hinaus, schätzen wir den Aufwand schriftlich ab und setzen sie nach Freigabe durch den Auftraggeber um. Bis zur Freigabe arbeiten wir nach diesem Angebot weiter.

# (12) Übergabe und Weiterbetrieb {#(12)-übergabe-und-weiterbetrieb}

Die Übergabe findet in KW 3 bis 4 statt, vor der Abgabe am 29.01.2027. Wir übergeben der HKA:

* den Quellcode in der GitHub-Organisation der HKA  
* die technische Dokumentation mit Architektur (C4 Level 1 bis 2)  
* die Betriebsanleitung und die Deployment-Konfiguration  
* die Anleitung für Fachexpertinnen zum Anlegen neuer Apps  
* die Prüfprotokolle und das Prüfskript der KI-Tests  
* eine Einführung für die künftigen Betreiber in der Abschlusspräsentation

Danach kann die HKA die Plattform ohne das Projektteam starten, betreiben und erweitern. Produktivbetrieb, Wartung und Support nach der Abnahme sind nicht enthalten. Wir können sie getrennt vereinbaren.

# (13) Angebots- und Vertragsbedingungen {#(13)-angebots--und-vertragsbedingungen}

## Nutzungsrechte {#nutzungsrechte}

Mit der vollständigen Zahlung erhält der Auftraggeber ein einfaches Recht ohne zeitliche und räumliche Grenze. Er darf alle gelieferten Ergebnisse nutzen, ändern und weitergeben, auch an künftige Entwicklerinnen und Entwickler der Plattform. Open-Source-Komponenten Dritter unterliegen ihren eigenen Lizenzen. Das Team darf die Ergebnisse als Referenz nennen.

## Gewährleistung und Haftung {#gewährleistung-und-haftung}

Es gilt die gesetzliche Haftung für Mängel bei Werkverträgen. Eine weitere Garantie übernehmen wir nicht. Bei Vorsatz und grober Fahrlässigkeit haften wir ohne Grenze. Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten und bis zur Höhe des Auftragswerts. Die Haftung für Schäden an Leben, Körper und Gesundheit bleibt unberührt.

## Geheimhaltung und Datenschutz {#geheimhaltung-und-datenschutz}

Wir behandeln alle internen Informationen der Hochschule vertraulich, auch nach Projektende. Personenbezogene Daten verarbeiten wir nur nach Vorgabe des Auftraggebers und nach DSGVO. Für Tests nutzen wir nur Testdaten oder eigene Daten der Teammitglieder.

## Gültigkeit und Schlussbestimmungen {#gültigkeit-und-schlussbestimmungen}

Dieses Angebot gilt bis zum 23.10.2026. Änderungen des Vertrags brauchen die Textform. Ist eine Bestimmung unwirksam, bleibt der übrige Vertrag wirksam. Gerichtsstand ist Karlsruhe.

# (14) Anlagen {#(14)-anlagen}

| Anlage | Inhalt |
| :---- | :---- |
| 1 | Konzeptpräsentation „Micro-App-Plattform“ (21 Folien) |
| 2 | Architekturbilder C4 Level 1 bis 2 (Stand bei Angebot) |
| 3 | Quellen zum Stundensatz: [freelancermap, Stundensatz Softwareentwickler](https://www.freelancermap.de/blog/?p=72121) und [JobRise, Freelance Developer Deutschland 2026](https://jobrise.io/de/blog/freelance-developer-deutschland-2026/) |

# Annahmeerklärung {#annahmeerklärung}

Hiermit nimmt der Auftraggeber das Angebot AWP-WS26-01 zum Festpreis von 45.000 € zuzüglich Umsatzsteuer an.

|  | Auftraggeber | Auftragnehmer |
| :---- | :---- | :---- |
| Ort, Datum |  |  |
| Name |  |  |
| Unterschrift |  |  |

[image1]: <data:image/png;base64,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>
