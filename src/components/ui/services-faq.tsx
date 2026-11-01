"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

const questions = [
  ["Berapa lama proses pembuatan website?", "Durasi bergantung pada cakupan dan kesiapan materi. Jadwal disepakati saat konsultasi."],
  ["Apakah harga sudah termasuk domain dan hosting?", "Kebutuhan domain dan hosting dibahas dalam konsultasi dan dijelaskan dalam penawaran."],
  ["Apakah desain website bisa disesuaikan?", "Ya, desain disesuaikan dengan identitas dan kebutuhan bisnis yang disepakati."],
  ["Apakah tersedia revisi?", "Ketentuan revisi ditentukan bersama sesuai cakupan proyek."],
  ["Apakah website sudah responsif?", "Website dirancang agar dapat digunakan di berbagai ukuran layar, sesuai cakupan proyek."],
  ["Apakah tersedia bantuan setelah website selesai?", "Kebutuhan bantuan dan pemeliharaan setelah peluncuran dapat dibahas saat konsultasi."],
  ["Bagaimana proses pembayaran?", "Tahapan dan ketentuan pembayaran disepakati dalam penawaran proyek."],
];
export function ServicesFAQ() {
  return <Accordion.Root type="single" collapsible className="services-faq-list">{questions.map(([question, answer], index) => <Accordion.Item value={`item-${index}`} key={question} className="services-faq-item"><Accordion.Header><Accordion.Trigger className="services-faq-trigger">{question}<Plus size={20} aria-hidden="true" /></Accordion.Trigger></Accordion.Header><Accordion.Content className="services-faq-answer"><p>{answer}</p></Accordion.Content></Accordion.Item>)}</Accordion.Root>;
}
