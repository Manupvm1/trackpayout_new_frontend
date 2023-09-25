import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private AuthService:AuthService,private router: Router){

  }

    openSidebar: boolean = true;

      menuSidebar=[
        {
        link_name: "Dashboard",
        link: "/features/dashboard/standard",
        icon: "fa-solid fa-border-all",
        sub_menu: [
          {
            link_name: "Standard",
            link: "/features/dashboard/standard",
          }, 
          {
            link_name: "By Amount",
            link: "/features/dashboard/amount",
          }, 
          {
            link_name: "By Ledger",
            link: "/features/dashboard/ledger",
          }, 
          {
            link_name: "By Stock item",
            link: "/features/dashboard/stock-item",
          },
          {
            link_name: "Monthly Report",
            link: "/html-n-css",
          },  
        ]
      }, 
      
      
      {
        link_name: "Stock Summary",
        link: "/features/stock-summary",
        icon: "fa-solid fa-file-invoice",
        sub_menu: []
      }, 
      
      
      
      {
        link_name: "Reports",
        link: null,
        icon: "fa-solid fa-chart-column",
        sub_menu: [
          
          {
            link_name: "Group Oustanding",
            link: "/features/reports/groups",
          }, 
          {
            link_name: "Sales Registor",
            link: "/features/reports/sale",
          },
          {
            link_name: "Receipt Registor",
            link: "/features/reports/receipt",
          }, 
          {
            link_name: "Credit Note Registor",
            link: "/features/reports/creditnote",
          }, 
          {
            link_name: "Purchase Registor",
            link: "/features/reports/purchase",
          }, 
          {
            link_name: "Payment Registor",
            link: "/features/reports/payment",
          }, 
          {
            link_name: "Debit Note Registor",
            link: "/features/reports/debitnote",
          }, 
          {
            link_name: "Journal Registor",
            link: "/features/reports/journal",
          }, 
        ]
      },
       {
        link_name: "By Due Days",
        link: "/byduedays",
        icon: "fa-solid fa-calendar-days",
        sub_menu: [
          {
            link_name: "Sundry Debtor",
            link: "/features/reports/byduedays/sundrydebtor",
          }, 
          {
            link_name: "Sundry Creditor",
            link: "/features/reports/byduedays/sundrycreditor",
          }, 
        ]
      }, 
      {
        link_name: "Bill report",
        link: "/features/reports/bill",
        icon: "fa-solid fa-calendar-days",
        sub_menu: []
      }, 
      {
        link_name: "Ledger Statement",
        link: "/chart",
        icon: "fa-solid fa-file-lines",
        sub_menu: [
          {
            link_name: "Sundry Debtor",
            link: "/features/reports/ledger-statement/sundrydebtor",
          }, 
          {
            link_name: "Sundry Creditor",
            link: "/features/reports/ledger-statement/sundrycreditor",
          }, 
        ]
      },
       {
        link_name: "Ageing Report",
        link: "/features/reports/ageing",
        icon: "fa-solid fa-file-lines",
        sub_menu: []
      },
      {
        link_name: "Follow Up",
        link: "/features/followup",
        icon: "fa-solid fa-calendar-days",
        sub_menu: []
      },
      
       {
        link_name: "Client Performance",
        link: "/features/client",
        icon: "fa-solid fa-chart-line",
        sub_menu: []
      },
       {
        link_name: "Task",
        link: "/features/task",
        icon: "fa-solid fa-clock",
        sub_menu: []
      }  , 
      {
        link_name: "Bill Discount",
        link: "/features/bill-discount",
        icon: "fa-solid fa-percent",
        sub_menu: []
      },
       {
        link_name: "Statutory",
        link: "/setting",
        icon: "fa-solid fa-circle-check",
        sub_menu: [
          {
            link_name: "MSME",
            link: "/features/statutory/msme",
          }, 
          {
            link_name: "GST",
            link: "/features/statutory/gst",
          }, 
        ]
      }, 
      
      {
        link_name: "CRM",
        link: "/features/crm/dashboard",
        icon: "fa-solid fa-user",
        sub_menu: [
          {
            link_name: "Dashboard",
            link: "/features/crm/dashboard",
          }, 
          {
            link_name: "Sales Executive",
            link: "/features/crm/sales-executive",
          }, 
          {
            link_name: "Leads",
            link: "/features/crm/leads",
          }, 
          {
            link_name: "Quotations",
            link: "/features/crm/quotation",
          }, 
          {
            link_name: "Reports",
            link: "/features/crm/reports/lead-report",
            icon: "fa-solid fa-calendar-days",
            sub_menu: [
              {

                link_name: "Lead Report",
                link: "/features/crm/reports/lead-report",
              },
              {

                link_name: "Sales Executive Analyses",
                link: "/features/crm/reports/sale-report",
              }
            ]
          }, 
        ]
      },
       {
        link_name: "Legal Support",
        link: "/features/legal-support",
        icon: "fa-solid fa-circle-question",
        sub_menu: []
      },
      
      {
        link_name: "Contisoft Pannel",
        link: "/setting",
        icon: "fa-solid fa-bars-staggered",
        sub_menu: [
          {
            link_name: "Dashboard",
            link: "/features/contisoftpannel/dashboard",
          }, 
          {
            link_name: "Subscriptions",
            link: "/features/contisoftpannel/subscriptions",
          }, 
          {
            link_name: "Companies",
            link: "/features/contisoftpannel/companies",
          }, 
        ]
      },
      
      {
        link_name: "Adminstrator",
        link: "/setting",
        icon: "fa-solid fa-gear",
        sub_menu: [
          {
            link_name: "User",
            link: "/features/administrator/user",
          }, 
          {
            link_name: "Ledger",
            link: "/features/administrator/ledger",
          }, 
          {
            link_name: "OnBoard Masters",
            link: "/features/administrator/onboard-masters",
          }, 
          {
            link_name: "Bank Details",
            link: "/features/administrator/bank-details",
          },
          {
            link_name: "Company",
            link: "/features/administrator/company",
          },  
          {
            link_name: "General Configuration",
            link: "/features/administrator/general-config",
          }, 
        ]
      },
      
      {
        link_name: "Banking",
        link: "/setting",
        icon: "fa-solid fa-laptop",
        sub_menu: [
          {
            link_name: "Customer Statement",
            link: "/features/banking/customer-statement",
          }, 
          {
            link_name: "DP Power Calculator",
            link: "/features/banking/dpcalculator",
          }, 
        ]
      },
      
        {
          link_name: "Log",
          link: "/setting",
          icon: "fa-solid fa-arrow-right-from-bracket",
          sub_menu: [
            {
              link_name: "Logs",
              link: "/features/log/log",
            },   {
              link_name: "Logs by user",
              link: "/features/log/logbyuser",
            }
          ]
        },


      ];
      

      showSubmenu(itemEl: HTMLElement) {
        itemEl.classList.toggle("showMenu");
      }


  logout() {

    this.AuthService.logout().subscribe(result => {
      if (result['status'] == 200) {
        this.router.navigate(['/auth/login']);
        window.localStorage.clear();
      }
    })

    // if (confirm("Are you sure you want to logout?")) {
    //   window.localStorage.clear();
    //   this.router.navigate(['/auth/signin']);
    // }

  }

}
