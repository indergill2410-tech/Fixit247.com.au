import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
const db = new PrismaClient();
async function main(){
  await db.notification.deleteMany(); await db.leadClaim.deleteMany(); await db.job.deleteMany(); await db.homeownerProfile.deleteMany(); await db.tradieProfile.deleteMany(); await db.user.deleteMany();
  const admin = await db.user.create({data:{email:'admin@fixit247.com.au',hashedPassword:await hash('Admin1234!',12),isAdmin:true}});
  const homeowner = await db.user.create({data:{email:'homeowner@fixit247.com.au',hashedPassword:await hash('Home1234!',12),homeownerProfile:{create:{suburb:'Bondi'}}},include:{homeownerProfile:true}});
  const tradie = await db.user.create({data:{email:'tradie@fixit247.com.au',hashedPassword:await hash('Trade1234!',12),tradieProfile:{create:{suburb:'Bondi',trades:['plumbing'],businessName:'Bondi Plumbing'}}}});
  const both = await db.user.create({data:{email:'both@fixit247.com.au',hashedPassword:await hash('Both1234!',12),homeownerProfile:{create:{suburb:'Bondi'}},tradieProfile:{create:{suburb:'Bondi',trades:['electrical']}}}});
  await db.job.createMany({data:[{title:'Burst pipe urgent',description:'Kitchen flooded',suburb:'Bondi',trade:'plumbing',homeownerProfileId:homeowner.homeownerProfile!.id},{title:'Power outage',description:'Partial outage',suburb:'Bondi',trade:'electrical',homeownerProfileId:homeowner.homeownerProfile!.id},{title:'Blocked drain',description:'Water backing up',suburb:'Bondi',trade:'plumbing',homeownerProfileId:homeowner.homeownerProfile!.id}]});
}
main().finally(()=>db.$disconnect());
