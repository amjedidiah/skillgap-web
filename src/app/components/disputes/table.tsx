import { Payment, columns } from "../dashboard/column"
import { DataTable } from "../dashboard/data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Resolved"},    
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Ongoing"},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Resolved"},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Resolved"},    
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Ongoing"},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Resolved"},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Ongoing"},    
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Resolved"},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Resolved"},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Resolved"},    
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Ongoing"},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Resolved"},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Resolved"},    
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Resolved"},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Ongoing"},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Ongoing"},    
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Resolved"},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Resolved"},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Ongoing"},    
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Resolved"},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Resolved"},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Resolved"},    
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Ongoing"},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Referee: 'Referee', DocSubmitted: 'image', Status: "Resolved"},
  ];
}

export default async function DisputeCard() {
  const data = await getData()

  return (
    <div className="bg-white h-[553px] w-[100%] rounded-[8px] text-nowrap">
      <div className='cardScroll h-[100%] overflow-y-scroll overflow-x-scroll '>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}