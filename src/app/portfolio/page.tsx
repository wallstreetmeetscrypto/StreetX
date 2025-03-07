'use client'
import ActionButton from "@/components/Buttons/ActionButton"
import NormalButton from "@/components/Buttons/Normal"
import { Icons } from "@/components/Icons/icons"
import { Input } from "@/components/Input/input"
import { Custom } from "@/styles/custom"
import { useState } from "react"
import { Button, ButtonGroup } from "@heroui/button";
import { Select, SelectItem } from "@heroui/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue
} from "@heroui/table";

const PortfolioPage = () => {

  return (
    <div className={`${Custom.section} xl:p-5 md:p-10 lg:p-12 p-5 md:mt-12 mt-[100px] min-h-screen w-full mx-auto gap-8`}>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="p-6 bg-dark-200 rounded-3xl flex flex-col basis-1/2 gap-6">
          <div className="flex items-center gap-4">
            <Icons.TotalBalance />
            <div className="flex flex-col">
              <p className="opacity-70">Total Balance</p>
              <p className="font-semibold">$51,040</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <p className="opacity-70">Assets</p>
              <p>3</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="opacity-70">Total Minted WSE</p>
              <p>1,000</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="opacity-70">Rewards Pending</p>
              <p className="text-gold-300">+$123.45</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-dark-200 rounded-3xl flex flex-col basis-1/2 gap-6">
          <div className="flex items-center gap-4">
            <Icons.Profit />
            <div className="flex flex-col">
              <p className="opacity-70">24h Profit and Loss</p>
              <p className="font-semibold">+$1,234.56</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <p className="opacity-70">Assets</p>
              <p>3</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="opacity-70">Total Minted WSE</p>
              <p>1,000</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="opacity-70">Rewards Pending</p>
              <p className="text-gold-300">+$123.45</p>
            </div>
          </div>
        </div>
      </div>

      <Holders />

    </div >
  )
}

const Holders = () => {

  const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
  ];

  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
    },
  ];
  
  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "role",
      label: "ROLE",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];

  return (
    <div className="flex flex-col bg-dark-200 p-6 rounded-3xl">
      <div className="flex justify-between">
        <p className="text-2xl">Holdings</p>
        <div>
          <Button color="primary">Button</Button>
        </div>
      </div>
      <div className="w-full">
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div >
  )
}


const TokenHistory = () => {

  const history = [
    {
      type: 1,
      label: "buy",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: -1,
      label: "sell",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: 1,
      label: "buy",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: 1,
      label: "buy",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: -1,
      label: "sell",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: -1,
      label: "sell",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: 1,
      label: "buy",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: -1,
      label: "sell",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: 1,
      label: "buy",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: 1,
      label: "buy",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: -1,
      label: "sell",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: -1,
      label: "sell",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
  ]

  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="bg-dark-200 rounded-3xl p-6 flex flex-col gap-4">
      <div className="flex gap-3">
        <div className="bg-dark-50/20 px-3 py-1 rounded-lg cursor-pointer">
          Market Trade
        </div>
        <div className="px-3 py-1 rounded-lg cursor-pointer">
          Order Book
        </div>
      </div>

      <div className="w-full border-t border-dark-50/40 pt-4">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>Paused</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}


export default PortfolioPage