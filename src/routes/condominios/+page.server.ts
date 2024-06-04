import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
    const { data: condominios } = await supabase.from('condominios').select('*')
    return { condominios: condominios ?? [] }
}