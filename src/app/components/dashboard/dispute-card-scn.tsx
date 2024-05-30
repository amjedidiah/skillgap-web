import { Payment, columns } from "./column"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Status: "Null", Referee: 'Referee', DocSubmitted: 'Doc Submitted'},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Status: "Null", Referee: 'Referee', DocSubmitted: 'Doc Submitted'},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Status: "Null", Referee: 'Referee', DocSubmitted: 'Doc Submitted'},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Status: "Null", Referee: 'Referee', DocSubmitted: 'Doc Submitted'},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Status: "Null", Referee: 'Referee', DocSubmitted: 'Doc Submitted'},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Status: "Null", Referee: 'Referee', DocSubmitted: 'Doc Submitted'},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Status: "Null", Referee: 'Referee', DocSubmitted: 'Doc Submitted'},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Status: "Null", Referee: 'Referee', DocSubmitted: 'Doc Submitted'},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Status: "Null", Referee: 'Referee', DocSubmitted: 'Doc Submitted'},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Status: "Null", Referee: 'Referee', DocSubmitted: 'Doc Submitted'},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Status: "Null", Referee: 'Referee', DocSubmitted: 'Doc Submitted'},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Status: "Null", Referee: 'Referee', DocSubmitted: 'Doc Submitted'},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Status: "Null", Referee: 'Referee', DocSubmitted: 'Doc Submitted'},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Status: "Null", Referee: 'Referee', DocSubmitted: 'Doc Submitted'},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Status: "Null", Referee: 'Referee', DocSubmitted: 'Doc Submitted'},
    {SkillTest: "CODM", ID: "2454766356", DateAndTime: "27 July, 2024 | 4:00PM", Players: "Emmanuel Rivers, Ben Ki..", Status: "Null", Referee: 'Referee', DocSubmitted: 'Doc Submitted'},    
  ];
}

export default async function DisputeCard() {
  const data = await getData()

  return (
    <div className="bg-white h-[463px] w-[55%] rounded-[8px] pt-[20px] text-nowrap">
      <div className="flex space-x-[10px] pl-[36px] justify-center items-center w-fit py-[10px] ">
          <div className="text-[20px]">
              Dispute
          </div>
          <div className="text-[12px] text-[#8F8F8F]">
              (This week)
          </div>
      </div>
      <div className='cardScroll h-[84%] overflow-y-scroll overflow-x-scroll '>

        <DataTable columns={columns} data={data} />

      </div>
    </div>
  )
}
