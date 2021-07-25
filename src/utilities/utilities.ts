
export const getConfigForHeader = (api_id:number)=>{
    return{
        headers: {
          'X-API-ID': api_id,
          'X-CLIENT-TOKEN':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5IjoiMWVmZDBiNzctODk3Zi00ODI2LWI5OTUtM2QyYjQ0ODAzM2U0IiwidGVuYW50X2lkIjo3MywianRpX2tleSI6IjA0YjFiZTg5LTM0NzgtNDk3ZS05ZTU0LTU2NzNmYzZhNzdhZiJ9.ROoaMTEW_wFVQ_0GqCLxp_1kFtgAcqKmH2p0PzUlTcI',
          'content-type':'application/json'
        }
      }
}